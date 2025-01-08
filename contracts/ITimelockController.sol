// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

/**
 * @title ITimelockController
 * @notice Minimal interface for a timelock/ governance contract
 */
interface ITimelockController {
    /**
     * @notice Schedule a transaction for execution after a certain delay
     * @param target The contract to call
     * @param value Ether value to send (usually 0 unless you need to send ETH)
     * @param data The encoded function call data
     * @param predecessor A dependency for another scheduled operation, or bytes32(0) if none
     * @param salt A unique salt to create an operation identifier
     * @param delay The time to wait before execution is allowed
     */
    function schedule(
        address target,
        uint256 value,
        bytes calldata data,
        bytes32 predecessor,
        bytes32 salt,
        uint256 delay
    ) external;

    /**
     * @notice Execute a scheduled transaction once the delay has passed
     * @param target The contract to call
     * @param value Ether value to send
     * @param data The encoded function call data
     * @param predecessor Must match the previously scheduled operation if any
     * @param salt The same salt used in schedule
     */
    function execute(
        address target,
        uint256 value,
        bytes calldata data,
        bytes32 predecessor,
        bytes32 salt
    ) external payable;
}
