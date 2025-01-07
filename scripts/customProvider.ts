import { ethers } from "ethers";

async function main() {
  // For Ethers v6:
  const provider = new ethers.JsonRpcProvider("https://your-rpc-url");
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);

  const address = "0xYourContractAddress";
  const abi = [
    "function mint(address to, uint256 amount)",
    "function balanceOf(address account) external view returns (uint256)",
  ];

  // parseEther is now directly in ethers namespace
  const mintAmount = ethers.parseEther("100");

  const nusd = new ethers.Contract(address, abi, wallet);

  const tx = await nusd.mint(wallet.address, mintAmount);
  await tx.wait();
  console.log("Minted 100 NUSD!");
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});