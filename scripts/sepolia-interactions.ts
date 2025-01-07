// scripts/sepolia-interactions.ts
import { ethers } from "hardhat";
import { formatEther, parseEther } from "ethers";

async function main() {
  // Get the provider and wallet
  const provider = new ethers.JsonRpcProvider(process.env.ALCHEMY_SEPOLIA_RPC);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);

  // Sepolia contract addresses
  const nusdAddress = "0xF9731598542C2C0C29A1417683dF00f7d5b012BA";
  const propertyTokenAddress = "0x20309d221304DcD5764Bd951e81C1D09AdB483E6";
  const governanceTokenAddress = "0x3080C9C008Dee01A685559935FB887Fc42E7CbD8";
  const platformAddress = "0x7f057CB42dF90ffa486E780a0dCb4dc74DD00075";

  // Recipient address (replace with an actual address you control)
  const recipientAddress = wallet.address;

  // Load contracts with the wallet
  const nusd = await ethers.getContractAt("NUSD", nusdAddress, wallet);
  const propertyToken = await ethers.getContractAt("PropertyToken", propertyTokenAddress, wallet);
  const governanceToken = await ethers.getContractAt("GovernanceToken", governanceTokenAddress, wallet);
  const platform = await ethers.getContractAt("PlatformContract", platformAddress, wallet);

  console.log("\n===== Platform Interaction Scenario =====");
  console.log(`Using Wallet Address: ${wallet.address}`);

  // Generic contract method caller
  async function callContractMethod(
    contract: any, 
    methodName: string, 
    ...args: any[]
  ) {
    try {
      console.log(`Calling ${methodName} with args:`, args);
      
      // Direct method call with spread arguments
      const result = await contract[methodName](...args);
      
      // Check if result is a transaction
      if (result && typeof result.wait === 'function') {
        return await result.wait();
      }
      
      return result;
    } catch (error) {
      console.error(`Error in ${methodName}:`, error);
      throw error;
    }
  }

  // 1. Mint NUSD Tokens
  console.log("\n1. NUSD Token Minting:");
  try {
    const nusdMintAmount = parseEther("10000");
    await callContractMethod(
      platform, 
      'mintNUSD', 
      recipientAddress, 
      nusdMintAmount
    );
    
    const recipientNUSDBalance = await nusd.balanceOf(recipientAddress);
    console.log(`Recipient NUSD Balance: ${formatEther(recipientNUSDBalance)} NUSD`);
  } catch (error) {
    console.error("NUSD Minting failed:", error);
  }

 // 2. Property Token Minting
console.log("\n2. Property Token Minting:");
try {
  const propertyTokenURI = "https://example.com/property/luxuryapartment";
  
  await callContractMethod(
    platform, 
    'registerProperty', 
    recipientAddress, 
    propertyTokenURI
  );

  const recipientPropertyTokenBalance = await propertyToken.balanceOf(recipientAddress);
  console.log(`Recipient Property Token Balance: ${recipientPropertyTokenBalance}`);
} catch (error) {
  console.error("Property Token Minting failed:", error);
}

  // 3. Mint Governance Tokens
  console.log("\n3. Governance Token Minting:");
  try {
    const governanceTokenAmount = parseEther("5000");
    await callContractMethod(
      platform, 
      'mintGovernanceToken', 
      recipientAddress, 
      governanceTokenAmount
    );
    
    const recipientGovernanceBalance = await governanceToken.balanceOf(recipientAddress);
    console.log(`Recipient Governance Token Balance: ${formatEther(recipientGovernanceBalance)}`);
  } catch (error) {
    console.error("Governance Token Minting failed:", error);
  }

  // 4. Platform Contract Details
  console.log("\n4. Platform Contract Details:");
  const platformOwner = await platform.owner();
  console.log(`Platform Contract Owner: ${platformOwner}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });