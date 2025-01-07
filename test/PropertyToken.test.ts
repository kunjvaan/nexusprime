import { expect } from "chai";
import { ethers } from "hardhat";
import { PropertyToken } from "../typechain-types";

describe("PropertyToken", function () {
  let propertyToken: PropertyToken;
  let owner: any, addr1: any;

  beforeEach(async function () {
    const [deployer, addr1Signer] = await ethers.getSigners();
    owner = deployer;
    addr1 = addr1Signer;

    const PropertyToken = await ethers.getContractFactory("PropertyToken");
    propertyToken = (await PropertyToken.deploy(owner.address)) as PropertyToken;
    await propertyToken.waitForDeployment();
  });

  it("should mint a new property token", async function () {
    const tokenURI = "https://example.com/token/1";
    await propertyToken.mint(addr1.address, tokenURI);
    const ownerOfToken = await propertyToken.ownerOf(0);
    expect(ownerOfToken).to.equal(addr1.address);
  });

  it("should set the correct token URI", async function () {
    const tokenURI = "https://example.com/token/1";
    await propertyToken.mint(addr1.address, tokenURI);
    const uri = await propertyToken.tokenURI(0);
    expect(uri).to.equal(tokenURI);
  });

  it("should revert minting by non-owner", async function () {
    const tokenURI = "https://example.com/token/1";
    await expect(
      propertyToken.connect(addr1).mint(addr1.address, tokenURI)
    ).to.be.revertedWithCustomError(propertyToken, "OwnableUnauthorizedAccount").withArgs(addr1.address);
  });
});
