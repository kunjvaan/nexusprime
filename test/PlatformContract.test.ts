import { expect } from "chai";
import { ethers } from "hardhat";
import type { NUSD, PropertyToken, GovernanceToken, PlatformContract } from "../typechain-types";
import type { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";

describe("PlatformContract", function () {
  let nusd: NUSD;
  let propertyToken: PropertyToken;
  let governanceToken: GovernanceToken;
  let platform: PlatformContract;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();

    // Deploy contracts
    const NUSD = await ethers.getContractFactory("NUSD");
    nusd = await NUSD.deploy(owner.address) as NUSD;

    const PropertyToken = await ethers.getContractFactory("PropertyToken");
    propertyToken = await PropertyToken.deploy(owner.address) as PropertyToken;

    const GovernanceToken = await ethers.getContractFactory("GovernanceToken");
    governanceToken = await GovernanceToken.deploy(owner.address) as GovernanceToken;

    const Platform = await ethers.getContractFactory("PlatformContract");
    platform = await Platform.deploy(
      await nusd.getAddress(),
      await propertyToken.getAddress(), 
      await governanceToken.getAddress(),
      owner.address
    ) as PlatformContract;

    // Transfer ownership
    await nusd.transferOwnership(await platform.getAddress());
    await propertyToken.transferOwnership(await platform.getAddress());
    await governanceToken.transferOwnership(await platform.getAddress());
  });

  it("should mint stablecoins via the platform", async function () {
    const mintAmount = ethers.parseEther("500");
    await platform.mintNUSD(addr1.address, mintAmount);
    expect(await nusd.balanceOf(addr1.address)).to.equal(mintAmount);
  });

  it("should mint a new property token", async function () {
    const tokenURI = "https://example.com/property/1";
    await platform.registerProperty(addr1.address, tokenURI);
    expect(await propertyToken.ownerOf(0)).to.equal(addr1.address); // Check token 0
});

it("should set the correct token URI", async function () {
    const tokenURI = "https://example.com/property/1";
    await platform.registerProperty(addr1.address, tokenURI);
    expect(await propertyToken.tokenURI(0)).to.equal(tokenURI); // Check token 0
});
});
