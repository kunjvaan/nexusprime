// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

/**
 * @title ReceiptToken
 * @notice An ERC20 representing user deposits in a lending pool.
 *         Uses AccessControl for role-based mint/burn permissions.
 */
contract ReceiptToken is ERC20, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");
    bytes32 public constant LENDING_POOL_ROLE = keccak256("LENDING_POOL_ROLE");
    
    address public lendingPool;

    constructor() ERC20("Receipt Token", "rTKN") {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    /**
     * @notice Mint tokens to `to`. Only addresses with MINTER_ROLE can call.
     */
    function mint(address to, uint256 amount) external onlyRole(MINTER_ROLE) {
        _mint(to, amount);
    }
   
    function setLendingPool(address _lendingPool) external onlyRole(DEFAULT_ADMIN_ROLE) {
        lendingPool = _lendingPool;
        _grantRole(LENDING_POOL_ROLE, _lendingPool);
    }

    /**
     * @notice Burn tokens from `from`. Only addresses with BURNER_ROLE can call.
     */
    function burn(address from, uint256 amount) external onlyRole(BURNER_ROLE) {
        _burn(from, amount);
    }
}