import { ethers } from "hardhat";
import { formatEther } from "ethers";
import fs from "fs";
import path from "path";
import * as hre from "hardhat";  // Add this line

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log(
    "Account balance:",
    formatEther(await deployer.provider!.getBalance(deployer.address)),
    "ETH"
  );

  // Deployment object to store contract addresses and ABIs
  const deployments: { [key: string]: { address: string; abi: any } } = {};

  // Utility function to save deployments
  const saveDeployment = (name: string, contract: any) => {
    deployments[name] = {
      address: contract.target as string,
      abi: JSON.parse(contract.interface.format("json") as string),
    };
  };

  // Deploy NUSD
  const NUSD = await ethers.getContractFactory("NUSD");
  console.log("Deploying NUSD...");
  const nusd = await NUSD.deploy(deployer.address);
  await nusd.waitForDeployment();
  saveDeployment("NUSD", nusd);
  console.log("NUSD deployed to:", nusd.target);

  // Deploy PropertyToken
  const PropertyToken = await ethers.getContractFactory("PropertyToken");
  console.log("Deploying PropertyToken...");
  const propertyToken = await PropertyToken.deploy(deployer.address);
  await propertyToken.waitForDeployment();
  saveDeployment("PropertyToken", propertyToken);
  console.log("PropertyToken deployed to:", propertyToken.target);

  // Deploy GovernanceToken
  const GovernanceToken = await ethers.getContractFactory("GovernanceToken");
  console.log("Deploying GovernanceToken...");
  const governanceToken = await GovernanceToken.deploy(deployer.address);
  await governanceToken.waitForDeployment();
  saveDeployment("GovernanceToken", governanceToken);
  console.log("GovernanceToken deployed to:", governanceToken.target);

  // Deploy MockPriceOracle
  const PriceOracle = await ethers.getContractFactory("MockPriceOracle");
  console.log("Deploying MockPriceOracle...");
  const priceOracle = await PriceOracle.deploy();
  await priceOracle.waitForDeployment();
  saveDeployment("PriceOracle", priceOracle);
  console.log("PriceOracle deployed to:", priceOracle.target);

  // Deploy LendingPool
  const LendingPool = await ethers.getContractFactory("LendingPoolNovel");
  console.log("Deploying LendingPool...");
  const lendingPool = await LendingPool.deploy(
    nusd.target,
    priceOracle.target,
    200, 300, 8000, 8000, 9000
  );
  await lendingPool.waitForDeployment();
  saveDeployment("LendingPool", lendingPool);
  console.log("LendingPool deployed to:", lendingPool.target);

  // Deploy ReceiptToken
  const ReceiptToken = await ethers.getContractFactory("ReceiptToken");
  console.log("Deploying ReceiptToken...");
  const receiptToken = await ReceiptToken.deploy();
  await receiptToken.waitForDeployment();
  saveDeployment("ReceiptToken", receiptToken);
  console.log("ReceiptToken deployed to:", receiptToken.target);

  // Setup roles for LendingPool
  const MINTER_ROLE = ethers.id("MINTER_ROLE");
  const BURNER_ROLE = ethers.id("BURNER_ROLE");
  
  await receiptToken.grantRole(MINTER_ROLE, lendingPool.target);
  await receiptToken.grantRole(BURNER_ROLE, lendingPool.target);
  await lendingPool.setReceiptToken(receiptToken.target);

  // Deploy PlatformContract
  const PlatformContract = await ethers.getContractFactory("PlatformContract");
  console.log("Deploying PlatformContract...");
  const platform = await PlatformContract.deploy(
    nusd.target as string,
    propertyToken.target as string,
    governanceToken.target as string,
    deployer.address
  );
  await platform.waitForDeployment();
  saveDeployment("PlatformContract", platform);
  console.log("PlatformContract deployed to:", platform.target);

  // Transfer ownership of tokens to PlatformContract
  console.log("Transferring ownership of tokens to PlatformContract...");
  await nusd.transferOwnership(platform.target as string);
  console.log("Ownership of NUSD transferred to PlatformContract");
  await propertyToken.transferOwnership(platform.target as string);
  console.log("Ownership of PropertyToken transferred to PlatformContract");
  await governanceToken.transferOwnership(platform.target as string);
  console.log("Ownership of GovernanceToken transferred to PlatformContract");

  // Save deployments to JSON file
  const deploymentsPath = path.join(__dirname, "../deployments.json");
  fs.writeFileSync(
    deploymentsPath,
    JSON.stringify(deployments, null, 2)
  );
  console.log("Deployment addresses and ABIs saved to deployments.json");

  // Verify contracts on Etherscan if API key exists
  if (process.env.ETHERSCAN_API_KEY) {
    console.log("Verifying contracts on Etherscan...");
    
    await hre.run("verify:verify", {
      address: nusd.target,
      constructorArguments: [deployer.address],
    });

    await hre.run("verify:verify", {
      address: propertyToken.target,
      constructorArguments: [deployer.address],
    });

    await hre.run("verify:verify", {
      address: governanceToken.target,
      constructorArguments: [deployer.address],
    });

    await hre.run("verify:verify", {
      address: priceOracle.target,
      constructorArguments: [],
    });

    await hre.run("verify:verify", {
      address: lendingPool.target,
      constructorArguments: [
        nusd.target,
        priceOracle.target,
        200, 300, 8000, 8000, 9000
      ],
    });

    await hre.run("verify:verify", {
      address: receiptToken.target,
      constructorArguments: [],
    });

    await hre.run("verify:verify", {
      address: platform.target,
      constructorArguments: [
        nusd.target,
        propertyToken.target,
        governanceToken.target,
        deployer.address
      ],
    });
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error during deployment:", error);
    process.exit(1);
  });