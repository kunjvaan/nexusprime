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
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { Lock, LockInterface } from "../../contracts/Lock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_unlockTime",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_nusd",
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
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newUnlockTime",
        type: "uint256",
      },
    ],
    name: "FundsLocked",
    type: "event",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "when",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newUnlockTime",
        type: "uint256",
      },
    ],
    name: "lockFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lockedAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nusd",
    outputs: [
      {
        internalType: "contract IERC20",
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
  {
    inputs: [],
    name: "unlockTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000e5138038062000e518339818101604052810190620000379190620002be565b80600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620000ad5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620000a491906200032b565b60405180910390fd5b620000be816200015560201b60201c565b5042831162000104576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000fb90620003a9565b60405180910390fd5b8260028190555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050620003cb565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b6000819050919050565b62000233816200021e565b81146200023f57600080fd5b50565b600081519050620002538162000228565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002868262000259565b9050919050565b620002988162000279565b8114620002a457600080fd5b50565b600081519050620002b8816200028d565b92915050565b600080600060608486031215620002da57620002d962000219565b5b6000620002ea8682870162000242565b9350506020620002fd86828701620002a7565b92505060406200031086828701620002a7565b9150509250925092565b620003258162000279565b82525050565b60006020820190506200034260008301846200031a565b92915050565b600082825260208201905092915050565b7f556e6c6f636b2074696d65206d75737420626520667574757265000000000000600082015250565b600062000391601a8362000348565b91506200039e8262000359565b602082019050919050565b60006020820190508181036000830152620003c48162000382565b9050919050565b610a7680620003db6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80636ab28bc81161005b5780636ab28bc8146100ef578063715018a61461010d5780638da5cb5b14610117578063f2fde38b1461013557610088565b806314db20ac1461008d57806324600fc3146100ab578063251c1aa3146100b55780633287db4b146100d3575b600080fd5b610095610151565b6040516100a291906106b1565b60405180910390f35b6100b3610177565b005b6100bd6102b7565b6040516100ca91906106e5565b60405180910390f35b6100ed60048036038101906100e89190610731565b6102bd565b005b6100f7610416565b60405161010491906106e5565b60405180910390f35b61011561041c565b005b61011f610430565b60405161012c9190610792565b60405180910390f35b61014f600480360381019061014a91906107d9565b610459565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61017f6104df565b6002544210156101c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101bb90610863565b60405180910390fd5b600060035490506000600381905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb610219610430565b836040518363ffffffff1660e01b8152600401610237929190610883565b6020604051808303816000875af1158015610256573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061027a91906108e4565b507fbf2ed60bd5b5965d685680c01195c9514e4382e28e3a5a2d2d5244bf59411b9381426040516102ac929190610911565b60405180910390a150565b60025481565b4281116102ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f690610986565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b815260040161035e939291906109a6565b6020604051808303816000875af115801561037d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a191906108e4565b5081600360008282546103b49190610a0c565b92505081905550806002819055503373ffffffffffffffffffffffffffffffffffffffff167fe52cdcd45f0913116ea4f3de9bab0401ca2bbb5593445d1f6736170f57db75e8838360405161040a929190610911565b60405180910390a25050565b60035481565b6104246104df565b61042e6000610566565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6104616104df565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036104d35760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016104ca9190610792565b60405180910390fd5b6104dc81610566565b50565b6104e761062a565b73ffffffffffffffffffffffffffffffffffffffff16610505610430565b73ffffffffffffffffffffffffffffffffffffffff16146105645761052861062a565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040161055b9190610792565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061067761067261066d84610632565b610652565b610632565b9050919050565b60006106898261065c565b9050919050565b600061069b8261067e565b9050919050565b6106ab81610690565b82525050565b60006020820190506106c660008301846106a2565b92915050565b6000819050919050565b6106df816106cc565b82525050565b60006020820190506106fa60008301846106d6565b92915050565b600080fd5b61070e816106cc565b811461071957600080fd5b50565b60008135905061072b81610705565b92915050565b6000806040838503121561074857610747610700565b5b60006107568582860161071c565b92505060206107678582860161071c565b9150509250929050565b600061077c82610632565b9050919050565b61078c81610771565b82525050565b60006020820190506107a76000830184610783565b92915050565b6107b681610771565b81146107c157600080fd5b50565b6000813590506107d3816107ad565b92915050565b6000602082840312156107ef576107ee610700565b5b60006107fd848285016107c4565b91505092915050565b600082825260208201905092915050565b7f546f6f206561726c790000000000000000000000000000000000000000000000600082015250565b600061084d600983610806565b915061085882610817565b602082019050919050565b6000602082019050818103600083015261087c81610840565b9050919050565b60006040820190506108986000830185610783565b6108a560208301846106d6565b9392505050565b60008115159050919050565b6108c1816108ac565b81146108cc57600080fd5b50565b6000815190506108de816108b8565b92915050565b6000602082840312156108fa576108f9610700565b5b6000610908848285016108cf565b91505092915050565b600060408201905061092660008301856106d6565b61093360208301846106d6565b9392505050565b7f556e6c6f636b2074696d65206d75737420626520667574757265000000000000600082015250565b6000610970601a83610806565b915061097b8261093a565b602082019050919050565b6000602082019050818103600083015261099f81610963565b9050919050565b60006060820190506109bb6000830186610783565b6109c86020830185610783565b6109d560408301846106d6565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610a17826106cc565b9150610a22836106cc565b9250828201905080821115610a3a57610a396109dd565b5b9291505056fea26469706673582212201598880511c2fcff4e93e8000c67a53a9301096a756c7c0303a3659cac0d235864736f6c63430008140033";

type LockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Lock__factory extends ContractFactory {
  constructor(...args: LockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _unlockTime: BigNumberish,
    _nusd: AddressLike,
    initialOwner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _unlockTime,
      _nusd,
      initialOwner,
      overrides || {}
    );
  }
  override deploy(
    _unlockTime: BigNumberish,
    _nusd: AddressLike,
    initialOwner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _unlockTime,
      _nusd,
      initialOwner,
      overrides || {}
    ) as Promise<
      Lock & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Lock__factory {
    return super.connect(runner) as Lock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LockInterface {
    return new Interface(_abi) as LockInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Lock {
    return new Contract(address, _abi, runner) as unknown as Lock;
  }
}
