// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./NUSD.sol";
import "./PropertyToken.sol";
import "./GovernanceToken.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PlatformContract is Ownable {
    NUSD public immutable nusd;
    PropertyToken public immutable propertyToken;
    GovernanceToken public immutable governanceToken;

    constructor(
        address _nusd,
        address _propertyToken,
        address _governanceToken,
        address initialOwner
    ) Ownable(initialOwner) {
        nusd = NUSD(_nusd);
        propertyToken = PropertyToken(_propertyToken);
        governanceToken = GovernanceToken(_governanceToken);
    }

    function mintNUSD(address to, uint256 amount) external onlyOwner {
        nusd.mint(to, amount);
    }

    function registerProperty(address to, string memory uri) external onlyOwner {
        propertyToken.mint(to, uri);
    }

    function mintGovernanceToken(address to, uint256 amount) external onlyOwner {
        governanceToken.mint(to, amount);
    }
}