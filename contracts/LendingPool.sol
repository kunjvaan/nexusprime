// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";

contract LendingPoolNovel {
    using Math for uint256;

    // Role management
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    mapping(address => bool) public admins;

    // Custom pause functionality
    bool public paused;
    
    // Reentrancy guard
    uint256 private constant NOT_ENTERED = 1;
    uint256 private constant ENTERED = 2;
    uint256 private _status;

    // Batch status flags
    uint8 constant STATUS_NONEXISTENT = 0;
    uint8 constant STATUS_CREATED = 1;
    uint8 constant STATUS_PROCESSING = 2;
    uint8 constant STATUS_COMPLETED = 4;
    uint8 constant STATUS_FAILED = 8;
    uint8 constant STATUS_EXPIRED = 16;

    struct CompressedBatch {
        uint128 userCount;     
        uint128 totalValue;    
        uint8 status;         
        uint8 priority;       
        uint40 timestamp;     
        uint40 expiry;        
        uint32 gasConfig;     
    }

    struct BatchData {
        CompressedBatch compressed;
        mapping(address => uint256) userAmounts;
        mapping(address => bool) processed;
    }

    struct BatchTracker {
        mapping(bytes32 => BatchData) batches;        
        mapping(uint256 => bytes32) batchKeys;       
        uint256 batchCount;                         
        mapping(address => uint256[]) userBatches;   
    }

    // State variables
    mapping(address => BatchTracker) private batchTrackers;
    mapping(bytes32 => uint256) private batchIndices;

    // Events
    event BatchStatusChanged(bytes32 indexed batchKey, uint8 oldStatus, uint8 newStatus);
    event BatchCreated(bytes32 indexed batchKey, uint256 timestamp);
    event BatchProcessed(bytes32 indexed batchKey, uint256 processedCount);
    event Paused(address account);
    event Unpaused(address account);
    event AdminAdded(address indexed account);
    event AdminRemoved(address indexed account);

    // Custom modifiers
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

    constructor() {
        admins[msg.sender] = true;
        _status = NOT_ENTERED;
        emit AdminAdded(msg.sender);
    }

    function addAdmin(address account) external onlyAdmin {
        require(!admins[account], "Already admin");
        admins[account] = true;
        emit AdminAdded(account);
    }

    function removeAdmin(address account) external onlyAdmin {
        require(account != msg.sender, "Cannot remove self");
        require(admins[account], "Not admin");
        admins[account] = false;
        emit AdminRemoved(account);
    }

    function pause() external onlyAdmin {
        paused = true;
        emit Paused(msg.sender);
    }

    function unpause() external onlyAdmin {
        paused = false;
        emit Unpaused(msg.sender);
    }

    function createBatch(
        address token,
        address[] calldata users,
        uint256[] calldata amounts
    ) external whenNotPaused nonReentrant returns (bytes32) {
        require(users.length == amounts.length, "Length mismatch");
        require(users.length > 0, "Empty batch");

        BatchTracker storage tracker = batchTrackers[token];
        uint256 batchId = ++tracker.batchCount;
        bytes32 batchKey = keccak256(abi.encodePacked(token, batchId));

        CompressedBatch memory compressed = CompressedBatch({
            userCount: uint128(users.length),
            totalValue: 0,
            status: STATUS_CREATED,
            priority: 1,
            timestamp: uint40(block.timestamp),
            expiry: uint40(block.timestamp + 1 days),
            gasConfig: 0
        });

        BatchData storage batchData = tracker.batches[batchKey];
        batchData.compressed = compressed;

        uint128 totalValue = 0;
        for (uint256 i = 0; i < users.length; i++) {
            batchData.userAmounts[users[i]] = amounts[i];
            tracker.userBatches[users[i]].push(batchId);
            totalValue += uint128(amounts[i]);
        }
        batchData.compressed.totalValue = totalValue;

        tracker.batchKeys[batchId] = batchKey;
        batchIndices[batchKey] = batchId;

        emit BatchCreated(batchKey, block.timestamp);
        return batchKey;
    }

    function getBatchStatus(
        address token,
        uint256 batchId
    ) public view returns (uint8) {
        bytes32 batchKey = keccak256(abi.encodePacked(token, batchId));
        return batchTrackers[token].batches[batchKey].compressed.status;
    }

    function processBatch(
        address token,
        uint256 batchId
    ) external whenNotPaused nonReentrant {
        bytes32 batchKey = keccak256(abi.encodePacked(token, batchId));
        BatchTracker storage tracker = batchTrackers[token];
        BatchData storage batchData = tracker.batches[batchKey];

        require(batchData.compressed.status == STATUS_CREATED, "Invalid batch status");
        require(batchData.compressed.timestamp + 1 days > block.timestamp, "Batch expired");

        uint8 oldStatus = batchData.compressed.status;
        batchData.compressed.status = STATUS_PROCESSING;

        uint256 processedCount = 0;
        // Process batch logic would go here

        batchData.compressed.status = STATUS_COMPLETED;

        emit BatchStatusChanged(batchKey, oldStatus, batchData.compressed.status);
        emit BatchProcessed(batchKey, processedCount);
    }

    function getUserBatches(
        address token,
        address user
    ) external view returns (uint256[] memory) {
        return batchTrackers[token].userBatches[user];
    }

    function getBatchByIndex(
        address token,
        uint256 index
    ) external view returns (bytes32) {
        return batchTrackers[token].batchKeys[index];
    }
}
