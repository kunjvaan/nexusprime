// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * Example Lock contract in OZ 5.1.x that inherits from Ownable
 */
contract Lock is Ownable {
    IERC20 public nusd;
    uint256 public unlockTime;
    uint256 public lockedAmount;

    event FundsLocked(address indexed user, uint256 amount, uint256 newUnlockTime);
    event Withdrawal(uint256 amount, uint256 when);

    constructor(
        uint256 _unlockTime,
        address _nusd,
        address initialOwner
    )
        Ownable(initialOwner)  // REQUIRED: pass address to Ownable constructor
    {
        require(_unlockTime > block.timestamp, "Unlock time must be future");
        unlockTime = _unlockTime;
        nusd = IERC20(_nusd);
    }

    function lockFunds(uint256 amount, uint256 newUnlockTime) external {
        require(newUnlockTime > block.timestamp, "Unlock time must be future");
        nusd.transferFrom(msg.sender, address(this), amount);
        lockedAmount += amount;
        unlockTime = newUnlockTime;
        emit FundsLocked(msg.sender, amount, newUnlockTime);
    }

    function withdrawFunds() external onlyOwner {
        require(block.timestamp >= unlockTime, "Too early");
        uint256 amount = lockedAmount;
        lockedAmount = 0;

        // Transfer locked funds to the owner
        nusd.transfer(owner(), amount);
        emit Withdrawal(amount, block.timestamp);
    }
}
