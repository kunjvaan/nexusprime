/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  ReceiptToken,
  ReceiptTokenInterface,
} from "../../../contracts/LendingPool.sol/ReceiptToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
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
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pool",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600d81526020017f5265636569707420546f6b656e000000000000000000000000000000000000008152506040518060400160405280600681526020017f72544f4b454e000000000000000000000000000000000000000000000000000081525081600390816200008f919062000365565b508060049081620000a1919062000365565b50505033600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200044c565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200016d57607f821691505b60208210810362000183576200018262000125565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620001ed7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620001ae565b620001f98683620001ae565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000246620002406200023a8462000211565b6200021b565b62000211565b9050919050565b6000819050919050565b620002628362000225565b6200027a62000271826200024d565b848454620001bb565b825550505050565b600090565b6200029162000282565b6200029e81848462000257565b505050565b5b81811015620002c657620002ba60008262000287565b600181019050620002a4565b5050565b601f8211156200031557620002df8162000189565b620002ea846200019e565b81016020851015620002fa578190505b6200031262000309856200019e565b830182620002a3565b50505b505050565b600082821c905092915050565b60006200033a600019846008026200031a565b1980831691505092915050565b600062000355838362000327565b9150826002028217905092915050565b6200037082620000eb565b67ffffffffffffffff8111156200038c576200038b620000f6565b5b62000398825462000154565b620003a5828285620002ca565b600060209050601f831160018114620003dd5760008415620003c8578287015190505b620003d4858262000347565b86555062000444565b601f198416620003ed8662000189565b60005b828110156200041757848901518255600182019150602085019450602081019050620003f0565b8683101562000437578489015162000433601f89168262000327565b8355505b6001600288020188555050505b505050505050565b61119e806200045c6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806340c10f191161007157806340c10f191461019157806370a08231146101ad57806395d89b41146101dd5780639dc29fac146101fb578063a9059cbb14610217578063dd62ed3e14610247576100b4565b806306fdde03146100b9578063095ea7b3146100d757806316f0115b1461010757806318160ddd1461012557806323b872dd14610143578063313ce56714610173575b600080fd5b6100c1610277565b6040516100ce9190610d86565b60405180910390f35b6100f160048036038101906100ec9190610e41565b610309565b6040516100fe9190610e9c565b60405180910390f35b61010f61032c565b60405161011c9190610ec6565b60405180910390f35b61012d610352565b60405161013a9190610ef0565b60405180910390f35b61015d60048036038101906101589190610f0b565b61035c565b60405161016a9190610e9c565b60405180910390f35b61017b61038b565b6040516101889190610f7a565b60405180910390f35b6101ab60048036038101906101a69190610e41565b610394565b005b6101c760048036038101906101c29190610f95565b610432565b6040516101d49190610ef0565b60405180910390f35b6101e561047a565b6040516101f29190610d86565b60405180910390f35b61021560048036038101906102109190610e41565b61050c565b005b610231600480360381019061022c9190610e41565b6105aa565b60405161023e9190610e9c565b60405180910390f35b610261600480360381019061025c9190610fc2565b6105cd565b60405161026e9190610ef0565b60405180910390f35b60606003805461028690611031565b80601f01602080910402602001604051908101604052809291908181526020018280546102b290611031565b80156102ff5780601f106102d4576101008083540402835291602001916102ff565b820191906000526020600020905b8154815290600101906020018083116102e257829003601f168201915b5050505050905090565b600080610314610654565b905061032181858561065c565b600191505092915050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600254905090565b600080610367610654565b905061037485828561066e565b61037f858585610702565b60019150509392505050565b60006012905090565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610424576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041b906110ae565b60405180910390fd5b61042e82826107f6565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461048990611031565b80601f01602080910402602001604051908101604052809291908181526020018280546104b590611031565b80156105025780601f106104d757610100808354040283529160200191610502565b820191906000526020600020905b8154815290600101906020018083116104e557829003601f168201915b5050505050905090565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461059c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610593906110ae565b60405180910390fd5b6105a68282610878565b5050565b6000806105b5610654565b90506105c2818585610702565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b61066983838360016108fa565b505050565b600061067a84846105cd565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146106fc57818110156106ec578281836040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526004016106e3939291906110ce565b60405180910390fd5b6106fb848484840360006108fa565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036107745760006040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260040161076b9190610ec6565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107e65760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016107dd9190610ec6565b60405180910390fd5b6107f1838383610ad1565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108685760006040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161085f9190610ec6565b60405180910390fd5b61087460008383610ad1565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108ea5760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016108e19190610ec6565b60405180910390fd5b6108f682600083610ad1565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff160361096c5760006040517fe602df050000000000000000000000000000000000000000000000000000000081526004016109639190610ec6565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036109de5760006040517f94280d620000000000000000000000000000000000000000000000000000000081526004016109d59190610ec6565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508015610acb578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610ac29190610ef0565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610b23578060026000828254610b179190611134565b92505081905550610bf6565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610baf578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610ba6939291906110ce565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c3f5780600260008282540392505081905550610c8c565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610ce99190610ef0565b60405180910390a3505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d30578082015181840152602081019050610d15565b60008484015250505050565b6000601f19601f8301169050919050565b6000610d5882610cf6565b610d628185610d01565b9350610d72818560208601610d12565b610d7b81610d3c565b840191505092915050565b60006020820190508181036000830152610da08184610d4d565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610dd882610dad565b9050919050565b610de881610dcd565b8114610df357600080fd5b50565b600081359050610e0581610ddf565b92915050565b6000819050919050565b610e1e81610e0b565b8114610e2957600080fd5b50565b600081359050610e3b81610e15565b92915050565b60008060408385031215610e5857610e57610da8565b5b6000610e6685828601610df6565b9250506020610e7785828601610e2c565b9150509250929050565b60008115159050919050565b610e9681610e81565b82525050565b6000602082019050610eb16000830184610e8d565b92915050565b610ec081610dcd565b82525050565b6000602082019050610edb6000830184610eb7565b92915050565b610eea81610e0b565b82525050565b6000602082019050610f056000830184610ee1565b92915050565b600080600060608486031215610f2457610f23610da8565b5b6000610f3286828701610df6565b9350506020610f4386828701610df6565b9250506040610f5486828701610e2c565b9150509250925092565b600060ff82169050919050565b610f7481610f5e565b82525050565b6000602082019050610f8f6000830184610f6b565b92915050565b600060208284031215610fab57610faa610da8565b5b6000610fb984828501610df6565b91505092915050565b60008060408385031215610fd957610fd8610da8565b5b6000610fe785828601610df6565b9250506020610ff885828601610df6565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061104957607f821691505b60208210810361105c5761105b611002565b5b50919050565b7f4f6e6c79204c656e64696e67506f6f6c2063616e2063616c6c00000000000000600082015250565b6000611098601983610d01565b91506110a382611062565b602082019050919050565b600060208201905081810360008301526110c78161108b565b9050919050565b60006060820190506110e36000830186610eb7565b6110f06020830185610ee1565b6110fd6040830184610ee1565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061113f82610e0b565b915061114a83610e0b565b925082820190508082111561116257611161611105565b5b9291505056fea26469706673582212207bbc34504342f4dee1b711b3c67805d32b6e8c67094343bf4b9fc611e5be47a564736f6c63430008140033";

type ReceiptTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReceiptTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReceiptToken__factory extends ContractFactory {
  constructor(...args: ReceiptTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      ReceiptToken & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ReceiptToken__factory {
    return super.connect(runner) as ReceiptToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReceiptTokenInterface {
    return new Interface(_abi) as ReceiptTokenInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ReceiptToken {
    return new Contract(address, _abi, runner) as unknown as ReceiptToken;
  }
}