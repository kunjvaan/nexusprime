const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Integration Testing for Nexus Prime", function () {
  let owner, user1, user2;
  let governanceToken, nusdToken, propertyToken, lockContract, platformContract;

  beforeEach(async function () {
    [owner, user1, user2] = await ethers.getSigners();

    // Deploy NUSD
    const NUSD = await ethers.getContractFactory("NUSD");
    nusdToken = await NUSD.deploy(owner.address);
    await nusdToken.waitForDeployment();

    // Deploy PropertyToken
    const PropertyToken = await ethers.getContractFactory("PropertyToken");
    propertyToken = await PropertyToken.deploy(owner.address);
    await propertyToken.waitForDeployment();

    // Deploy GovernanceToken
    const GovernanceToken = await ethers.getContractFactory("GovernanceToken");
    governanceToken = await GovernanceToken.deploy(owner.address);
    await governanceToken.waitForDeployment();

    // Deploy PlatformContract
    const PlatformContract = await ethers.getContractFactory("PlatformContract");
    platformContract = await PlatformContract.deploy(
      nusdToken.target,
      propertyToken.target,
      governanceToken.target,
      owner.address
    );
    await platformContract.waitForDeployment();

    // Transfer ownership of tokens to PlatformContract
    await nusdToken.transferOwnership(platformContract.target);
    await propertyToken.transferOwnership(platformContract.target);
    await governanceToken.transferOwnership(platformContract.target);
  });

  it("should mint NUSD tokens through the platform", async function () {
    const mintAmount = ethers.parseEther("100");

    // Mint NUSD for user1 via the PlatformContract
    await platformContract.connect(owner).mintNUSD(user1.address, mintAmount);

    // Validate user1's NUSD balance
    const balance = await nusdToken.balanceOf(user1.address);
    expect(balance).to.equal(mintAmount);
  });

  it("should register a property through the platform", async function () {
    const propertyURI = "https://property-metadata.com/property/1";

    // Register property for user1
    await platformContract.connect(owner).registerProperty(user1.address, propertyURI);

    // Validate property ownership
    // If your PropertyToken mints starting at tokenId=0, check `ownerOf(0)`
    const propertyOwner = await propertyToken.ownerOf(0);
    expect(propertyOwner).to.equal(user1.address);
  });

  it("should mint governance tokens through the platform", async function () {
    const mintAmount = ethers.parseEther("50");

    // Mint governance tokens for user1 via the PlatformContract
    await platformContract.connect(owner).mintGovernanceToken(user1.address, mintAmount);

    // Validate user1's governance token balance
    const balance = await governanceToken.balanceOf(user1.address);
    expect(balance).to.equal(mintAmount);
  });

  it("should lock and withdraw funds through the Lock contract", async function () {
    // We'll set an unlockTime 1 hour in the future
    const unlockTime = Math.floor(Date.now() / 1000) + 3600;

    // Deploy Lock contract
    const Lock = await ethers.getContractFactory("Lock");
    //         ───── 3 arguments ──────────────────────────────────────
    lockContract = await Lock.deploy(
      unlockTime,
      await nusdToken.getAddress(),
      user1.address       // user1 is the Lock owner
    );
    await lockContract.waitForDeployment();

    const lockAmount = ethers.parseEther("1");

    // Mint NUSD for user1 via the PlatformContract
    await platformContract.connect(owner).mintNUSD(user1.address, lockAmount);

    // user1 approves Lock to move the NUSD
    await nusdToken.connect(user1).approve(lockContract.target, lockAmount);

    // user1 locks funds
    await lockContract.connect(user1).lockFunds(lockAmount, unlockTime);

    // Simulate time jump of 1 hour
    await ethers.provider.send("evm_increaseTime", [3600]);
    await ethers.provider.send("evm_mine", []);

    // user1 can withdraw because they are the Lock owner
    await lockContract.connect(user1).withdrawFunds();

    // Validate user1's final NUSD balance
    const balance = await nusdToken.balanceOf(user1.address);
    expect(balance).to.equal(lockAmount);
  });
});
