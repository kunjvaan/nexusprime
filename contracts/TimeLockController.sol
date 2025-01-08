// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "./ITimelockController.sol";

/**
 * @title TimelockController (Minimal Example)
 * @notice A simple timelock that schedules and executes calls after a delay.
 *         For a real system, consider using OpenZeppelin’s TimelockController instead.
 */
contract TimelockController is ITimelockController {
    // Operation info keyed by keccak256(abi.encode(...)) of the call details
    mapping(bytes32 => uint256) public timestamps;

    // Minimum delay enforced by this timelock
    uint256 public minDelay;

    /**
     * @param _minDelay The minimum number of seconds to wait before execution
     */
    constructor(uint256 _minDelay) {
        minDelay = _minDelay;
    }

    /**
     * @notice Schedule a function call after the given delay.
     */
    function schedule(
        address target,
        uint256 value,
        bytes calldata data,
        bytes32 predecessor,
        bytes32 salt,
        uint256 delay
    ) external override {
        require(delay >= minDelay, "TimelockController: insufficient delay");

        // Compute a unique operation ID using the function call details + salt
        bytes32 id = keccak256(abi.encode(target, value, data, predecessor, salt));
        require(timestamps[id] == 0, "TimelockController: already scheduled");

        // Set timestamp for when this call can be executed
        timestamps[id] = block.timestamp + delay;
    }

    /**
     * @notice Execute a previously scheduled call after its delay has elapsed.
     */
    function execute(
        address target,
        uint256 value,
        bytes calldata data,
        bytes32 predecessor,
        bytes32 salt
    ) external payable override {
        // Recompute the same operation ID
        bytes32 id = keccak256(abi.encode(target, value, data, predecessor, salt));
        uint256 timestamp = timestamps[id];

        require(timestamp != 0, "TimelockController: not scheduled");
        require(block.timestamp >= timestamp, "TimelockController: not ready");

        // Clear so it can't be re-executed
        timestamps[id] = 0;

        // Perform the call
        (bool success, ) = target.call{value: value}(data);
        require(success, "TimelockController: call failed");
    }
}
