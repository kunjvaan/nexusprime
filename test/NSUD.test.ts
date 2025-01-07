import { expect } from "chai";
import { ethers } from "hardhat";
import { NUSD } from "../typechain-types";

describe("NUSD Stablecoin", function () {
  let nusd: NUSD;
  let owner: any, addr1: any;

  beforeEach(async function () {
    const [deployer, addr1Signer] = await ethers.getSigners();
    owner = deployer;
    addr1 = addr1Signer;

    const NUSD = await ethers.getContractFactory("NUSD");
    nusd = (await NUSD.deploy(owner.address)) as NUSD;
    await nusd.waitForDeployment();
  });

  it("should mint NUSD correctly", async function () {
    const mintAmount = ethers.parseEther("1000");
    await nusd.mint(addr1.address, mintAmount);
    const balance = await nusd.balanceOf(addr1.address);
    expect(balance).to.equal(mintAmount);
  });

  it("should burn NUSD correctly", async function () {
    const mintAmount = ethers.parseEther("1000");
    const burnAmount = ethers.parseEther("500");
    await nusd.mint(addr1.address, mintAmount);
    await nusd.burn(addr1.address, burnAmount);
    const balance = await nusd.balanceOf(addr1.address);
    expect(balance).to.equal(mintAmount - burnAmount);
  });

  it("should revert minting by non-owner", async function () {
    const mintAmount = ethers.parseEther("1000");
    await expect(
      nusd.connect(addr1).mint(addr1.address, mintAmount)
    ).to.be.revertedWithCustomError(nusd, "OwnableUnauthorizedAccount").withArgs(addr1.address);
  });
});
