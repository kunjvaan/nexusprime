// contracts/NUSD.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NUSD is ERC20, Ownable {
    // Events for tracking actions
    event Mint(address indexed to, uint256 amount);
    event Burn(address indexed from, uint256 amount);

    constructor(address initialOwner) ERC20("Nexus USD", "NUSD") Ownable(initialOwner) {}

    modifier validAddress(address addr) {
        require(addr != address(0), "Invalid address");
        _;
    }

    function mint(address to, uint256 amount) external onlyOwner validAddress(to) {
        _mint(to, amount);
        emit Mint(to, amount);
    }

    function burn(address from, uint256 amount) external onlyOwner validAddress(from) {
        _burn(from, amount);
        emit Burn(from, amount);
    }

    // Utility functions
    function totalSupplyWithDecimals() external view returns (string memory) {
        return string(abi.encodePacked(totalSupply(), " (raw units with decimals)"));
    }

    function ownerBalance() external view returns (uint256) {
        return balanceOf(owner());
    }
}
