// scripts/interact.ts
import { ethers } from "hardhat";

async function main() {
  // 1) Retrieve your deployed contract addresses:
  const nusdAddress = "0x4523aD5355C6789A130FA5BB48ae13591ca0459D";      // Example address
  const propertyTokenAddress = "0x23869377e4306D333B6Bb2aC19CBE5Ff815Fe6eB";
  const platformAddress = "0x059a6D477f54c15f2fD2d71A5d63ef02434ac4f4";

  // 2) Attach to the contracts using Hardhat (Ethers v6 style)
  const nusd = await ethers.getContractAt("NUSD", nusdAddress);
  const propertyToken = await ethers.getContractAt("PropertyToken", propertyTokenAddress);
  const platform = await ethers.getContractAt("PlatformContract", platformAddress);

  // 3) Get a signer from Hardhat 
  const [owner, user1] = await ethers.getSigners();

  // 4) Example: read user1's NUSD balance.
  const user1Address = user1.address;
  const balance = await nusd.balanceOf(user1Address);
  console.log(`NUSD Balance of user1: ${balance.toString()}`);

  // 5) Example: call `mintNUSD` from your PlatformContract as the owner
  const platformWithOwner = platform.connect(owner);

  // In Ethers v6, parse ether directly with ethers.parseEther()
  const mintAmount = ethers.parseEther("100");
  const mintTx = await platformWithOwner.mintNUSD(user1Address, mintAmount);
  await mintTx.wait();

  console.log(`Minted 100 NUSD to ${user1Address}`);

  // 6) (Optional) Check new balance
  const newBalance = await nusd.balanceOf(user1Address);
  console.log(`New NUSD Balance of user1: ${newBalance.toString()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});