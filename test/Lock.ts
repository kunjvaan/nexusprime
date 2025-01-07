import { time, loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";


describe("Lock Contract", function () {
  async function deployLockFixture() {
    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    const latestTime = await time.latest();
    const unlockTime = latestTime + ONE_YEAR_IN_SECS;

    const [owner, otherAccount] = await ethers.getSigners();

    // Deploy NUSD token
    const NUSD = await ethers.getContractFactory("NUSD");
    const nusd = await NUSD.deploy(owner.address);

    // Deploy Lock contract -- 3 arguments
    const Lock = await ethers.getContractFactory("Lock");
    const lock = await Lock.deploy(
      unlockTime,
      await nusd.getAddress(),
      owner.address   // initialOwner
    );

    // Some typical locked amount
    const lockedAmount = ethers.parseEther("1");

    return { lock, nusd, unlockTime, lockedAmount, owner, otherAccount };
  }

  describe("Withdrawals", () => {
    it("Should revert if called by non-owner", async function () {
      const { lock, otherAccount } = await loadFixture(deployLockFixture);
      // using custom error from OZ 5.1.x
      await expect(lock.connect(otherAccount).withdrawFunds())
        .to.be.revertedWithCustomError(lock, "OwnableUnauthorizedAccount")
        .withArgs(otherAccount.address);
    });

    it("Should emit event on successful withdrawal", async function () {
      const { lock, nusd, unlockTime, lockedAmount, owner } = await loadFixture(deployLockFixture);

      // mint & lock
      await nusd.mint(owner.address, lockedAmount);
      await nusd.approve(lock.target, lockedAmount);
      await lock.lockFunds(lockedAmount, unlockTime);

      // skip time
      await time.increaseTo(unlockTime);

      // Option A: no direct time assertion
      await expect(lock.withdrawFunds())
        .to.emit(lock, "Withdrawal")
        .withArgs(lockedAmount, anyValue); // we only verify the first param

      // Option B: read the receipt & block
      // const tx = await lock.withdrawFunds();
      // const rcpt = await tx.wait();
      // const block = await ethers.provider.getBlock(rcpt.blockNumber);
      // expect(block.timestamp).to.be.closeTo(unlockTime, 2);
    });
  });
});
