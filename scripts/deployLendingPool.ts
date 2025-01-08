import { ethers } from "hardhat";
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import * as hre from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);

  // Deploy NUSD
  const NUSD = await ethers.getContractFactory("NUSD");
  const nusd = await NUSD.deploy(deployer.address);
  await nusd.waitForDeployment();
  console.log("NUSD deployed to:", await nusd.getAddress());

  // Deploy MockPriceOracle
  const PriceOracle = await ethers.getContractFactory("MockPriceOracle");
  const priceOracle = await PriceOracle.deploy();
  await priceOracle.waitForDeployment();
  console.log("PriceOracle deployed to:", await priceOracle.getAddress());

  // Deploy LendingPoolNovel
  const LendingPool = await ethers.getContractFactory("LendingPoolNovel");
  const lendingPool = await LendingPool.deploy(
    await nusd.getAddress(),
    await priceOracle.getAddress(),
    200,  // baseRate (2%)
    300,  // slope1 (3%)
    8000, // kink (80%)
    8000, // collateralFactor (80%)
    9000  // liquidationThreshold (90%)
  );
  await lendingPool.waitForDeployment();
  console.log("LendingPool deployed to:", await lendingPool.getAddress());

  // Deploy ReceiptToken
  const ReceiptToken = await ethers.getContractFactory("ReceiptToken");
  const receiptToken = await ReceiptToken.deploy();
  await receiptToken.waitForDeployment();
  console.log("ReceiptToken deployed to:", await receiptToken.getAddress());

  // Setup roles and linking
  const MINTER_ROLE = ethers.id("MINTER_ROLE");
  const BURNER_ROLE = ethers.id("BURNER_ROLE");
  
  await receiptToken.grantRole(MINTER_ROLE, await lendingPool.getAddress());
  await receiptToken.grantRole(BURNER_ROLE, await lendingPool.getAddress());
  await lendingPool.setReceiptToken(await receiptToken.getAddress());

  console.log("Initial setup completed");

  // Verify contracts on Etherscan
  console.log("Verifying contracts on Etherscan...");
  if (process.env.ETHERSCAN_API_KEY) {
    await hre.run("verify:verify", {
      address: await nusd.getAddress(),
      constructorArguments: [deployer.address],
    });

    await hre.run("verify:verify", {
      address: await priceOracle.getAddress(),
      constructorArguments: [],
    });

    await hre.run("verify:verify", {
      address: await lendingPool.getAddress(),
      constructorArguments: [
        await nusd.getAddress(),
        await priceOracle.getAddress(),
        200,
        300,
        8000,
        8000,
        9000
      ],
    });

    await hre.run("verify:verify", {
      address: await receiptToken.getAddress(),
      constructorArguments: [],
    });
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });