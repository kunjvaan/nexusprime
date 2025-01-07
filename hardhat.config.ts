import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";
require("@nomicfoundation/hardhat-toolbox"); 
require("@nomicfoundation/hardhat-ethers"); // Beta plugin for Ethers v6


const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_SEPOLIA_RPC || "",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  sourcify: {
    enabled: true
  }
};

export default config;