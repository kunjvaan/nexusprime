import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "your_deployed_contract_address";
const INTERVAL_MS = 300000; // 5 minutes

async function autoInteract(): Promise<void> {
 const contract = await ethers.getContractAt("YourContract", CONTRACT_ADDRESS);
 
 setInterval(async () => {
   try {
     const tx = await contract.someFunction();
     await tx.wait();
     console.log("Interaction:", tx.hash);
   } catch (error) {
     console.error("Error:", error);
   }
 }, INTERVAL_MS);
}

autoInteract().catch(console.error);