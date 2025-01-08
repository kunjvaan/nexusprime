import { expect } from "chai";
import { ethers } from "hardhat";
import { NUSD, ReceiptToken, LendingPoolNovel, MockPriceOracle } from "../typechain-types";

describe("LendingPoolNovel with AccessControl", function () {
  let deployer: any, user1: any, user2: any;
  let collateralToken: NUSD;
  let receiptToken: ReceiptToken;
  let lendingPool: LendingPoolNovel;
  let priceOracle: MockPriceOracle;

  beforeEach(async () => {
    [deployer, user1, user2] = await ethers.getSigners();

    // Deploy NUSD (collateral token)
    const NUSDFactory = await ethers.getContractFactory("NUSD");
    collateralToken = (await NUSDFactory.deploy(deployer.address)) as NUSD;
    await collateralToken.waitForDeployment();

    // Deploy MockPriceOracle
    const PriceOracleFactory = await ethers.getContractFactory("MockPriceOracle");
    priceOracle = (await PriceOracleFactory.deploy()) as MockPriceOracle;
    await priceOracle.waitForDeployment();

    // Deploy LendingPoolNovel
    const LendingPoolFactory = await ethers.getContractFactory("LendingPoolNovel");
    lendingPool = (await LendingPoolFactory.deploy(
      await collateralToken.getAddress(),
      await priceOracle.getAddress(),
      200,  // baseRate
      300,  // slope1
      8000, // kink
      8000, // collateral factor (80%)
      9000  // liquidation threshold
    )) as LendingPoolNovel;
    await lendingPool.waitForDeployment();

    // Deploy ReceiptToken
    const ReceiptTokenFactory = await ethers.getContractFactory("ReceiptToken");
    receiptToken = (await ReceiptTokenFactory.deploy()) as ReceiptToken;
    await receiptToken.waitForDeployment();

    // Grant MINTER_ROLE and BURNER_ROLE to the LendingPool
    const MINTER_ROLE = ethers.id("MINTER_ROLE");
    const BURNER_ROLE = ethers.id("BURNER_ROLE");

    await receiptToken.grantRole(MINTER_ROLE, await lendingPool.getAddress());
    await receiptToken.grantRole(BURNER_ROLE, await lendingPool.getAddress());

    // Link LendingPool and ReceiptToken
    await lendingPool.setReceiptToken(await receiptToken.getAddress());

    // Mint NUSD to user1 and user2
    const mintAmount = ethers.parseEther("1000");
    await collateralToken.mint(user1.address, mintAmount);
    await collateralToken.mint(user2.address, mintAmount);

    // Approve LendingPool to spend user1/user2's NUSD
    await collateralToken.connect(user1).approve(await lendingPool.getAddress(), mintAmount);
    await collateralToken.connect(user2).approve(await lendingPool.getAddress(), mintAmount);
  });

  it("should allow deposits and mint receipt tokens", async function () {
    const depositAmount = ethers.parseEther("100");

    await lendingPool.connect(user1).deposit(depositAmount);

    const receiptBalance = await receiptToken.balanceOf(user1.address);
    const userPosition = await lendingPool.userPositions(user1.address);

    expect(receiptBalance).to.equal(depositAmount);
    expect(userPosition.collateralAmount).to.equal(depositAmount);
  });

  it("should allow withdrawals and burn receipt tokens", async function () {
    const depositAmount = ethers.parseEther("100");
    const withdrawAmount = ethers.parseEther("50");

    await lendingPool.connect(user1).deposit(depositAmount);
    await lendingPool.connect(user1).withdraw(withdrawAmount);

    const receiptBalance = await receiptToken.balanceOf(user1.address);
    const userPosition = await lendingPool.userPositions(user1.address);

    // Use ethers.BigNumber arithmetic
    expect(receiptBalance).to.equal(depositAmount - withdrawAmount);
expect(userPosition.collateralAmount).to.equal(depositAmount - withdrawAmount);
  });

  it("should allow borrowing within collateral limits", async function () {
    const depositAmount = ethers.parseEther("100");
    const borrowAmount = ethers.parseEther("50");

    await lendingPool.connect(user1).deposit(depositAmount);

    // Mock the price: 1 NUSD = 1 USD
    await priceOracle.setPrice(ethers.parseEther("1"));

    await lendingPool.connect(user1).borrow(borrowAmount);

    const userPosition = await lendingPool.userPositions(user1.address);
    expect(userPosition.borrowedAmount).to.equal(borrowAmount);
  });

  it("should revert borrowing above collateral limits", async function () {
    const depositAmount = ethers.parseEther("100"); // User deposits 100 NUSD
    const borrowAmount = ethers.parseEther("90");  // Attempt to borrow 90 NUSD (above 80% limit)

    // User deposits collateral
    await lendingPool.connect(user1).deposit(depositAmount);

    // Mock the price: 1 NUSD = 1 USD
    await priceOracle.setPrice(ethers.parseEther("1"));

    // Attempt to borrow more than allowed and check for revert
    await expect(
      lendingPool.connect(user1).borrow(borrowAmount)
    ).to.be.revertedWith("Exceeds borrow limit");

    // Verify no additional funds were borrowed
    const postPosition = await lendingPool.userPositions(user1.address);
expect(postPosition.borrowedAmount).to.equal(0n);
  });
});
