import { ethers } from "hardhat";
import { formatEther } from "ethers";
import fs from 'fs';
import path from 'path';

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log(
    "Account balance:",
    formatEther(await deployer.provider!.getBalance(deployer.address)),
    "ETH"
  );

  // Deployment object to store contract addresses
  const deployments: { [key: string]: string } = {};

  // Deploy NUSD
  const NUSD = await ethers.getContractFactory("NUSD");
  const nusd = await NUSD.deploy(deployer.address);
  await nusd.waitForDeployment();
  const nusdAddress = nusd.target as string;
  deployments.NUSD = nusdAddress;
  console.log("NUSD deployed to:", nusdAddress);

  // Deploy PropertyToken
  const PropertyToken = await ethers.getContractFactory("PropertyToken");
  const propertyToken = await PropertyToken.deploy(deployer.address);
  await propertyToken.waitForDeployment();
  const propertyTokenAddress = propertyToken.target as string;
  deployments.PropertyToken = propertyTokenAddress;
  console.log("PropertyToken deployed to:", propertyTokenAddress);

  // Deploy GovernanceToken
  const GovernanceToken = await ethers.getContractFactory("GovernanceToken");
  const governanceToken = await GovernanceToken.deploy(deployer.address);
  await governanceToken.waitForDeployment();
  const governanceTokenAddress = governanceToken.target as string;
  deployments.GovernanceToken = governanceTokenAddress;
  console.log("GovernanceToken deployed to:", governanceTokenAddress);

  // Deploy PlatformContract
  const PlatformContract = await ethers.getContractFactory("PlatformContract");
  const platform = await PlatformContract.deploy(
    nusdAddress,
    propertyTokenAddress,
    governanceTokenAddress,
    deployer.address
  );
  await platform.waitForDeployment();
  const platformAddress = platform.target as string;
  deployments.PlatformContract = platformAddress;
  console.log("PlatformContract deployed to:", platformAddress);

  // Transfer ownership of tokens to PlatformContract
  await nusd.transferOwnership(platformAddress);
  console.log("Ownership of NUSD transferred to PlatformContract");

  await propertyToken.transferOwnership(platformAddress);
  console.log("Ownership of PropertyToken transferred to PlatformContract");

  await governanceToken.transferOwnership(platformAddress);
  console.log("Ownership of GovernanceToken transferred to PlatformContract");

  // Save deployments to JSON file
  const deploymentsPath = path.join(__dirname, '../deployments.json');
  fs.writeFileSync(
    deploymentsPath, 
    JSON.stringify(deployments, null, 2)
  );
  console.log("Deployment addresses saved to deployments.json");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });