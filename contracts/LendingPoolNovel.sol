// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/*  
    ================
    OpenZeppelin Imports
    ================
*/
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";
import "./ITimelockController.sol";
import "./IPriceOracle.sol";

/*
    ================
    Internal Imports
    ================
*/
import "./ReceiptToken.sol"; // Import our separate ReceiptToken
import "./IPriceOracle.sol";  // Example price oracle interface
import "./ITimelockController.sol"; // Example timelock interface (optional)

/**
 * @title LendingPoolNovel
 * @notice A simplified lending pool that can deposit, withdraw, borrow, and repay,
 *         using a single collateral token and a single receipt token.
 */
contract LendingPoolNovel {
    using Math for uint256;

    // --------------------
    // 1. Role & Admin Management
    // --------------------
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    mapping(address => bool) public admins;

    // Optional: multi-sig / timelock (not fully implemented)
    ITimelockController internal _timelock;

    // --------------------
    // 2. Pause Functionality
    // --------------------
    bool public paused;

    // --------------------
    // 3. Reentrancy Guard
    // --------------------
    uint256 private constant NOT_ENTERED = 1;
    uint256 private constant ENTERED = 2;
    uint256 private _status;

    // --------------------
    // 4. Core Lending Mechanics
    // --------------------

    // Simplified interest rate model parameters
    uint256 public baseRate;
    uint256 public utilizationRate;
    uint256 public slope1;
    uint256 public kink;

    // Collateral & Borrow logic (single token example)
    IERC20 public collateralToken;
    // The separate ReceiptToken contract. We link it later via setReceiptToken().
    ReceiptToken public receiptToken;

    // Each user's deposit & borrow data
    struct UserPosition {
        uint256 collateralAmount;
        uint256 borrowedAmount;
        uint256 lastInterestBlock;
    }

    mapping(address => UserPosition) public userPositions;

    // Collateral factor and liquidation threshold (basis points)
    uint256 public collateralFactorBps;
    uint256 public liquidationThresholdBps;

    // --------------------
    // 5. Oracle Integration
    // --------------------
    IPriceOracle public priceOracle;

    // --------------------
    // 6. Events
    // --------------------
    event Deposit(address indexed user, uint256 amount, uint256 sharesMinted);
    event Withdraw(address indexed user, uint256 amount, uint256 sharesBurned);
    event Borrow(address indexed user, uint256 amount);
    event Repay(address indexed user, uint256 amount);
    event Liquidation(
        address indexed liquidator,
        address indexed user,
        uint256 collateralSeized
    );
    event Paused(address account);
    event Unpaused(address account);
    event AdminAdded(address indexed account);
    event AdminRemoved(address indexed account);

    // --------------------
    // 7. Modifiers
    // --------------------
    modifier onlyAdmin() {
        require(admins[msg.sender], "Not an admin");
        _;
    }

    modifier nonReentrant() {
        require(_status != ENTERED, "ReentrancyGuard: reentrant call");
        _status = ENTERED;
        _;
        _status = NOT_ENTERED;
    }

    modifier whenNotPaused() {
        require(!paused, "Paused");
        _;
    }

    /*
        --------------------
        Constructor
        --------------------
        We do NOT deploy the ReceiptToken here. Instead, we will 
        deploy it externally and link via setReceiptToken(...).
    */
    constructor(
        address _collateralToken,
        address _priceOracle,
        uint256 _baseRate,
        uint256 _slope1,
        uint256 _kink,
        uint256 _collateralFactorBps,
        uint256 _liquidationThresholdBps
    ) {
        require(_collateralToken != address(0), "Invalid collateral token");
        require(_priceOracle != address(0), "Invalid oracle");

        admins[msg.sender] = true;
        emit AdminAdded(msg.sender);

        _status = NOT_ENTERED;

        collateralToken = IERC20(_collateralToken);
        priceOracle = IPriceOracle(_priceOracle);

        baseRate = _baseRate;
        slope1 = _slope1;
        kink = _kink;
        collateralFactorBps = _collateralFactorBps;
        liquidationThresholdBps = _liquidationThresholdBps;
    }

    // ------------------------------------------------------
    // Option B: Link a separately deployed ReceiptToken
    // ------------------------------------------------------
    function setReceiptToken(address _receiptToken) external onlyAdmin {
        require(address(receiptToken) == address(0), "ReceiptToken already set");
        receiptToken = ReceiptToken(_receiptToken);
    }

    /*
        ==================================
        Deposit, Withdraw, Borrow, and Repay
        ==================================
    */

    /// @notice Deposit collateral and receive 1:1 receipt tokens
    function deposit(uint256 amount) external whenNotPaused nonReentrant {
        require(amount > 0, "Cannot deposit 0");

        // 1. Transfer collateral from user -> this contract
        collateralToken.transferFrom(msg.sender, address(this), amount);

        // 2. Mint the same amount of receipt tokens to the user
        //    The LendingPool must have MINTER_ROLE on the ReceiptToken for this to work!
        receiptToken.mint(msg.sender, amount);

        // 3. Update user position
        UserPosition storage position = userPositions[msg.sender];
        position.collateralAmount += amount;

        emit Deposit(msg.sender, amount, amount);
    }

    /// @notice Withdraw collateral by burning receipt tokens
    function withdraw(uint256 shares) external whenNotPaused nonReentrant {
        require(shares > 0, "Invalid share amount");
        // The user must have enough receipt tokens to burn
        require(receiptToken.balanceOf(msg.sender) >= shares, "Insufficient shares");

        // 1. Burn the user's receipt tokens
        //    The LendingPool must have BURNER_ROLE on the ReceiptToken for this to work!
        receiptToken.burn(msg.sender, shares);

        // 2. Update the user's position (reduce collateral)
        UserPosition storage position = userPositions[msg.sender];
        require(position.collateralAmount >= shares, "Not enough collateral");
        position.collateralAmount -= shares;

        // 3. Transfer collateral from contract -> user
        collateralToken.transfer(msg.sender, shares);

        emit Withdraw(msg.sender, shares, shares);
    }

    /// @notice Borrow up to the user's collateral limit
    function borrow(uint256 borrowAmount) external whenNotPaused nonReentrant {
        UserPosition storage position = userPositions[msg.sender];
        uint256 collateralValue = getCollateralValue(position.collateralAmount);

        // The user can borrow up to collateralFactorBps (e.g. 80%) of their collateralValue
        uint256 maxBorrow = (collateralValue * collateralFactorBps) / 10000;
        require(position.borrowedAmount + borrowAmount <= maxBorrow, "Exceeds borrow limit");

        // Increase borrowed amount
        position.borrowedAmount += borrowAmount;

        // Transfer borrowed tokens from the pool to the user
        collateralToken.transfer(msg.sender, borrowAmount);

        emit Borrow(msg.sender, borrowAmount);
    }

    /// @notice Repay borrowed tokens
    function repay(uint256 repayAmount) external whenNotPaused nonReentrant {
        UserPosition storage position = userPositions[msg.sender];
        require(position.borrowedAmount > 0, "No debt");

        uint256 actualRepay = repayAmount > position.borrowedAmount
            ? position.borrowedAmount
            : repayAmount;

        // Transfer tokens from user to contract
        collateralToken.transferFrom(msg.sender, address(this), actualRepay);

        // Reduce user's borrowed amount
        position.borrowedAmount -= actualRepay;

        emit Repay(msg.sender, actualRepay);
    }

    /*
        ==================================
        Helper and Admin Functions
        ==================================
    */

    function getCollateralValue(uint256 collatAmount) public view returns (uint256) {
    uint256 price = priceOracle.getAssetPrice(address(collateralToken));
    // Both price and collatAmount are in 18 decimals, so divide by 1e18
    return (collatAmount * price) / 1e18;
    }

    function pause() external onlyAdmin {
        paused = true;
        emit Paused(msg.sender);
    }

    function unpause() external onlyAdmin {
        paused = false;
        emit Unpaused(msg.sender);
    }
}