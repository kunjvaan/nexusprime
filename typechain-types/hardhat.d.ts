/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IERC1155Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Errors__factory>;
    getContractFactory(
      name: "IERC20Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Errors__factory>;
    getContractFactory(
      name: "IERC721Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Errors__factory>;
    getContractFactory(
      name: "IERC4906",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC4906__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "ERC721URIStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721URIStorage__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "SafeCast",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SafeCast__factory>;
    getContractFactory(
      name: "Strings",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Strings__factory>;
    getContractFactory(
      name: "GovernanceToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernanceToken__factory>;
    getContractFactory(
      name: "IPriceOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPriceOracle__factory>;
    getContractFactory(
      name: "ITimelockController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITimelockController__factory>;
    getContractFactory(
      name: "LendingPoolNovel",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LendingPoolNovel__factory>;
    getContractFactory(
      name: "Lock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Lock__factory>;
    getContractFactory(
      name: "MockPriceOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockPriceOracle__factory>;
    getContractFactory(
      name: "NUSD",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NUSD__factory>;
    getContractFactory(
      name: "PlatformContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PlatformContract__factory>;
    getContractFactory(
      name: "PropertyToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PropertyToken__factory>;
    getContractFactory(
      name: "ReceiptToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ReceiptToken__factory>;
    getContractFactory(
      name: "TimelockController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TimelockController__factory>;

    getContractAt(
      name: "AccessControl",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: "IAccessControl",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControl>;
    getContractAt(
      name: "Ownable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "IERC1155Errors",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Errors>;
    getContractAt(
      name: "IERC20Errors",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Errors>;
    getContractAt(
      name: "IERC721Errors",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Errors>;
    getContractAt(
      name: "IERC4906",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC4906>;
    getContractAt(
      name: "ERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC721",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "ERC721URIStorage",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721URIStorage>;
    getContractAt(
      name: "IERC721Metadata",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "SafeCast",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.SafeCast>;
    getContractAt(
      name: "Strings",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Strings>;
    getContractAt(
      name: "GovernanceToken",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernanceToken>;
    getContractAt(
      name: "IPriceOracle",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IPriceOracle>;
    getContractAt(
      name: "ITimelockController",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ITimelockController>;
    getContractAt(
      name: "LendingPoolNovel",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.LendingPoolNovel>;
    getContractAt(
      name: "Lock",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Lock>;
    getContractAt(
      name: "MockPriceOracle",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MockPriceOracle>;
    getContractAt(
      name: "NUSD",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.NUSD>;
    getContractAt(
      name: "PlatformContract",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.PlatformContract>;
    getContractAt(
      name: "PropertyToken",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.PropertyToken>;
    getContractAt(
      name: "ReceiptToken",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ReceiptToken>;
    getContractAt(
      name: "TimelockController",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.TimelockController>;

    deployContract(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AccessControl>;
    deployContract(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IAccessControl>;
    deployContract(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Ownable>;
    deployContract(
      name: "IERC1155Errors",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155Errors>;
    deployContract(
      name: "IERC20Errors",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Errors>;
    deployContract(
      name: "IERC721Errors",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721Errors>;
    deployContract(
      name: "IERC4906",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC4906>;
    deployContract(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20>;
    deployContract(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Metadata>;
    deployContract(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC721>;
    deployContract(
      name: "ERC721URIStorage",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC721URIStorage>;
    deployContract(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721Metadata>;
    deployContract(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721>;
    deployContract(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721Receiver>;
    deployContract(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC165>;
    deployContract(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC165>;
    deployContract(
      name: "SafeCast",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SafeCast>;
    deployContract(
      name: "Strings",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Strings>;
    deployContract(
      name: "GovernanceToken",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.GovernanceToken>;
    deployContract(
      name: "IPriceOracle",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IPriceOracle>;
    deployContract(
      name: "ITimelockController",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ITimelockController>;
    deployContract(
      name: "LendingPoolNovel",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.LendingPoolNovel>;
    deployContract(
      name: "Lock",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Lock>;
    deployContract(
      name: "MockPriceOracle",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockPriceOracle>;
    deployContract(
      name: "NUSD",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.NUSD>;
    deployContract(
      name: "PlatformContract",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.PlatformContract>;
    deployContract(
      name: "PropertyToken",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.PropertyToken>;
    deployContract(
      name: "ReceiptToken",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ReceiptToken>;
    deployContract(
      name: "TimelockController",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.TimelockController>;

    deployContract(
      name: "AccessControl",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AccessControl>;
    deployContract(
      name: "IAccessControl",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IAccessControl>;
    deployContract(
      name: "Ownable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Ownable>;
    deployContract(
      name: "IERC1155Errors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155Errors>;
    deployContract(
      name: "IERC20Errors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Errors>;
    deployContract(
      name: "IERC721Errors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721Errors>;
    deployContract(
      name: "IERC4906",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC4906>;
    deployContract(
      name: "ERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20>;
    deployContract(
      name: "IERC20Metadata",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Metadata>;
    deployContract(
      name: "IERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "ERC721",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC721>;
    deployContract(
      name: "ERC721URIStorage",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC721URIStorage>;
    deployContract(
      name: "IERC721Metadata",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721Metadata>;
    deployContract(
      name: "IERC721",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721>;
    deployContract(
      name: "IERC721Receiver",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721Receiver>;
    deployContract(
      name: "ERC165",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC165>;
    deployContract(
      name: "IERC165",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC165>;
    deployContract(
      name: "SafeCast",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SafeCast>;
    deployContract(
      name: "Strings",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Strings>;
    deployContract(
      name: "GovernanceToken",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.GovernanceToken>;
    deployContract(
      name: "IPriceOracle",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IPriceOracle>;
    deployContract(
      name: "ITimelockController",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ITimelockController>;
    deployContract(
      name: "LendingPoolNovel",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.LendingPoolNovel>;
    deployContract(
      name: "Lock",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Lock>;
    deployContract(
      name: "MockPriceOracle",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockPriceOracle>;
    deployContract(
      name: "NUSD",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.NUSD>;
    deployContract(
      name: "PlatformContract",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.PlatformContract>;
    deployContract(
      name: "PropertyToken",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.PropertyToken>;
    deployContract(
      name: "ReceiptToken",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ReceiptToken>;
    deployContract(
      name: "TimelockController",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.TimelockController>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
