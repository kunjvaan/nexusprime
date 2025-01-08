// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

/**
 * @title IPriceOracle
 * @notice Minimal interface for a price oracle contract
 */
interface IPriceOracle {
    /**
     * @notice Get the price of an asset
     * @param asset The address of the asset
     * @return The price of the asset (e.g., in USD, scaled by 1e18)
     */
    function getAssetPrice(address asset) external view returns (uint256);
}
