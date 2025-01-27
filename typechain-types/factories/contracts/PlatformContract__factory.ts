/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  PlatformContract,
  PlatformContractInterface,
} from "../../contracts/PlatformContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_nusd",
        type: "address",
      },
      {
        internalType: "address",
        name: "_propertyToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_governanceToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "governanceToken",
    outputs: [
      {
        internalType: "contract GovernanceToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mintGovernanceToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mintNUSD",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nusd",
    outputs: [
      {
        internalType: "contract NUSD",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "propertyToken",
    outputs: [
      {
        internalType: "contract PropertyToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "registerProperty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e06040523480156200001157600080fd5b5060405162000e9338038062000e93833981810160405281019062000037919062000293565b80600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620000ad5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620000a4919062000316565b60405180910390fd5b620000be816200016560201b60201c565b508373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508273ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250508173ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff16815250505050505062000333565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200025b826200022e565b9050919050565b6200026d816200024e565b81146200027957600080fd5b50565b6000815190506200028d8162000262565b92915050565b60008060008060808587031215620002b057620002af62000229565b5b6000620002c0878288016200027c565b9450506020620002d3878288016200027c565b9350506040620002e6878288016200027c565b9250506060620002f9878288016200027c565b91505092959194509250565b62000310816200024e565b82525050565b60006020820190506200032d600083018462000305565b92915050565b60805160a05160c051610b1b62000378600039600081816103e30152610474015260008181610249015261027501526000818161018c01526101b80152610b1b6000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063715018a611610066578063715018a61461010c5780638da5cb5b14610116578063f2fde38b14610134578063f65dfca914610150578063f96dae0a1461016c57610093565b806314db20ac14610098578063246d224a146100b657806343ae2695146100d25780636eeaa3a4146100f0575b600080fd5b6100a061018a565b6040516100ad9190610668565b60405180910390f35b6100d060048036038101906100cb919061070b565b6101ae565b005b6100da610247565b6040516100e7919061076c565b60405180910390f35b61010a600480360381019061010591906108cd565b61026b565b005b610114610316565b005b61011e61032a565b60405161012b9190610938565b60405180910390f35b61014e60048036038101906101499190610953565b610353565b005b61016a6004803603810190610165919061070b565b6103d9565b005b610174610472565b60405161018191906109a1565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000081565b6101b6610496565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166340c10f1983836040518363ffffffff1660e01b81526004016102119291906109cb565b600060405180830381600087803b15801561022b57600080fd5b505af115801561023f573d6000803e3d6000fd5b505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b610273610496565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0def52183836040518363ffffffff1660e01b81526004016102ce929190610a73565b6020604051808303816000875af11580156102ed573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103119190610ab8565b505050565b61031e610496565b610328600061051d565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61035b610496565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036103cd5760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016103c49190610938565b60405180910390fd5b6103d68161051d565b50565b6103e1610496565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166340c10f1983836040518363ffffffff1660e01b815260040161043c9291906109cb565b600060405180830381600087803b15801561045657600080fd5b505af115801561046a573d6000803e3d6000fd5b505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b61049e6105e1565b73ffffffffffffffffffffffffffffffffffffffff166104bc61032a565b73ffffffffffffffffffffffffffffffffffffffff161461051b576104df6105e1565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016105129190610938565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061062e610629610624846105e9565b610609565b6105e9565b9050919050565b600061064082610613565b9050919050565b600061065282610635565b9050919050565b61066281610647565b82525050565b600060208201905061067d6000830184610659565b92915050565b6000604051905090565b600080fd5b600080fd5b60006106a2826105e9565b9050919050565b6106b281610697565b81146106bd57600080fd5b50565b6000813590506106cf816106a9565b92915050565b6000819050919050565b6106e8816106d5565b81146106f357600080fd5b50565b600081359050610705816106df565b92915050565b600080604083850312156107225761072161068d565b5b6000610730858286016106c0565b9250506020610741858286016106f6565b9150509250929050565b600061075682610635565b9050919050565b6107668161074b565b82525050565b6000602082019050610781600083018461075d565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6107da82610791565b810181811067ffffffffffffffff821117156107f9576107f86107a2565b5b80604052505050565b600061080c610683565b905061081882826107d1565b919050565b600067ffffffffffffffff821115610838576108376107a2565b5b61084182610791565b9050602081019050919050565b82818337600083830152505050565b600061087061086b8461081d565b610802565b90508281526020810184848401111561088c5761088b61078c565b5b61089784828561084e565b509392505050565b600082601f8301126108b4576108b3610787565b5b81356108c484826020860161085d565b91505092915050565b600080604083850312156108e4576108e361068d565b5b60006108f2858286016106c0565b925050602083013567ffffffffffffffff81111561091357610912610692565b5b61091f8582860161089f565b9150509250929050565b61093281610697565b82525050565b600060208201905061094d6000830184610929565b92915050565b6000602082840312156109695761096861068d565b5b6000610977848285016106c0565b91505092915050565b600061098b82610635565b9050919050565b61099b81610980565b82525050565b60006020820190506109b66000830184610992565b92915050565b6109c5816106d5565b82525050565b60006040820190506109e06000830185610929565b6109ed60208301846109bc565b9392505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610a2e578082015181840152602081019050610a13565b60008484015250505050565b6000610a45826109f4565b610a4f81856109ff565b9350610a5f818560208601610a10565b610a6881610791565b840191505092915050565b6000604082019050610a886000830185610929565b8181036020830152610a9a8184610a3a565b90509392505050565b600081519050610ab2816106df565b92915050565b600060208284031215610ace57610acd61068d565b5b6000610adc84828501610aa3565b9150509291505056fea264697066735822122044015eb7d105bbc842a11333e79efa0bead406eee83e7bbccd1815749d13466764736f6c63430008140033";

type PlatformContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PlatformContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PlatformContract__factory extends ContractFactory {
  constructor(...args: PlatformContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _nusd: AddressLike,
    _propertyToken: AddressLike,
    _governanceToken: AddressLike,
    initialOwner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _nusd,
      _propertyToken,
      _governanceToken,
      initialOwner,
      overrides || {}
    );
  }
  override deploy(
    _nusd: AddressLike,
    _propertyToken: AddressLike,
    _governanceToken: AddressLike,
    initialOwner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _nusd,
      _propertyToken,
      _governanceToken,
      initialOwner,
      overrides || {}
    ) as Promise<
      PlatformContract & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PlatformContract__factory {
    return super.connect(runner) as PlatformContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PlatformContractInterface {
    return new Interface(_abi) as PlatformContractInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): PlatformContract {
    return new Contract(address, _abi, runner) as unknown as PlatformContract;
  }
}
