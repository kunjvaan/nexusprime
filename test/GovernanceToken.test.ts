import { expect } from "chai";
import { ethers } from "hardhat";
import { GovernanceToken } from "../typechain-types";

describe("GovernanceToken", function () {
  let governanceToken: GovernanceToken;
  let owner: any, addr1: any;

  beforeEach(async function () {
    const [deployer, addr1Signer] = await ethers.getSigners();
    owner = deployer;
    addr1 = addr1Signer;

    const GovernanceToken = await ethers.getContractFactory("GovernanceToken");
    governanceToken = (await GovernanceToken.deploy(owner.address)) as GovernanceToken;
    await governanceToken.waitForDeployment();
  });

  it("should mint governance tokens correctly", async function () {
    const mintAmount = ethers.parseEther("200");
    await governanceToken.mint(addr1.address, mintAmount);

    const balance = await governanceToken.balanceOf(addr1.address);
    expect(balance).to.equal(mintAmount);
  });

  it("should revert minting by non-owner", async function () {
    const mintAmount = ethers.parseEther("100");
    await expect(
      governanceToken.connect(addr1).mint(addr1.address, mintAmount)
    ).to.be.revertedWithCustomError(governanceToken, "OwnableUnauthorizedAccount").withArgs(addr1.address);
  });
});
