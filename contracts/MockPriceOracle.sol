// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MockPriceOracle {
    uint256 private price;

    function setPrice(uint256 _price) external {
        price = _price;
    }

    function getAssetPrice(address /* asset */) external view returns (uint256) {
        return price;
    }
}
