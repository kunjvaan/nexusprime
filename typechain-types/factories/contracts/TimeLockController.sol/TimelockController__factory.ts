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
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  TimelockController,
  TimelockControllerInterface,
} from "../../../contracts/TimeLockController.sol/TimelockController";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_minDelay",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "minDelay",
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
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "schedule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "timestamps",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610b97380380610b978339818101604052810190610032919061007a565b80600181905550506100a7565b600080fd5b6000819050919050565b61005781610044565b811461006257600080fd5b50565b6000815190506100748161004e565b92915050565b6000602082840312156100905761008f61003f565b5b600061009e84828501610065565b91505092915050565b610ae1806100b66000396000f3fe60806040526004361061003f5760003560e01c806301d5062a14610044578063134008d31461006d578063b587295814610089578063c63c4e9b146100c6575b600080fd5b34801561005057600080fd5b5061006b600480360381019061006691906104e8565b6100f1565b005b61008760048036038101906100829190610597565b6101ec565b005b34801561009557600080fd5b506100b060048036038101906100ab9190610631565b610391565b6040516100bd919061066d565b60405180910390f35b3480156100d257600080fd5b506100db6103a9565b6040516100e8919061066d565b60405180910390f35b600154811015610136576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161012d9061070b565b60405180910390fd5b6000878787878787604051602001610153969594939291906107a7565b604051602081830303815290604052805190602001209050600080600083815260200190815260200160002054146101c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101b790610875565b60405180910390fd5b81426101cc91906108c4565b600080838152602001908152602001600020819055505050505050505050565b6000868686868686604051602001610209969594939291906107a7565b60405160208183030381529060405280519060200120905060008060008381526020019081526020016000205490506000810361027b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102729061096a565b60405180910390fd5b804210156102be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102b5906109d6565b60405180910390fd5b60008060008481526020019081526020016000208190555060008873ffffffffffffffffffffffffffffffffffffffff16888888604051610300929190610a26565b60006040518083038185875af1925050503d806000811461033d576040519150601f19603f3d011682016040523d82523d6000602084013e610342565b606091505b5050905080610386576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037d90610a8b565b60405180910390fd5b505050505050505050565b60006020528060005260406000206000915090505481565b60015481565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103e4826103b9565b9050919050565b6103f4816103d9565b81146103ff57600080fd5b50565b600081359050610411816103eb565b92915050565b6000819050919050565b61042a81610417565b811461043557600080fd5b50565b60008135905061044781610421565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126104725761047161044d565b5b8235905067ffffffffffffffff81111561048f5761048e610452565b5b6020830191508360018202830111156104ab576104aa610457565b5b9250929050565b6000819050919050565b6104c5816104b2565b81146104d057600080fd5b50565b6000813590506104e2816104bc565b92915050565b600080600080600080600060c0888a031215610507576105066103af565b5b60006105158a828b01610402565b97505060206105268a828b01610438565b965050604088013567ffffffffffffffff811115610547576105466103b4565b5b6105538a828b0161045c565b955095505060606105668a828b016104d3565b93505060806105778a828b016104d3565b92505060a06105888a828b01610438565b91505092959891949750929550565b60008060008060008060a087890312156105b4576105b36103af565b5b60006105c289828a01610402565b96505060206105d389828a01610438565b955050604087013567ffffffffffffffff8111156105f4576105f36103b4565b5b61060089828a0161045c565b9450945050606061061389828a016104d3565b925050608061062489828a016104d3565b9150509295509295509295565b600060208284031215610647576106466103af565b5b6000610655848285016104d3565b91505092915050565b61066781610417565b82525050565b6000602082019050610682600083018461065e565b92915050565b600082825260208201905092915050565b7f54696d656c6f636b436f6e74726f6c6c65723a20696e73756666696369656e7460008201527f2064656c61790000000000000000000000000000000000000000000000000000602082015250565b60006106f5602683610688565b915061070082610699565b604082019050919050565b60006020820190508181036000830152610724816106e8565b9050919050565b610734816103d9565b82525050565b600082825260208201905092915050565b82818337600083830152505050565b6000601f19601f8301169050919050565b6000610777838561073a565b935061078483858461074b565b61078d8361075a565b840190509392505050565b6107a1816104b2565b82525050565b600060a0820190506107bc600083018961072b565b6107c9602083018861065e565b81810360408301526107dc81868861076b565b90506107eb6060830185610798565b6107f86080830184610798565b979650505050505050565b7f54696d656c6f636b436f6e74726f6c6c65723a20616c7265616479207363686560008201527f64756c6564000000000000000000000000000000000000000000000000000000602082015250565b600061085f602583610688565b915061086a82610803565b604082019050919050565b6000602082019050818103600083015261088e81610852565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006108cf82610417565b91506108da83610417565b92508282019050808211156108f2576108f1610895565b5b92915050565b7f54696d656c6f636b436f6e74726f6c6c65723a206e6f74207363686564756c6560008201527f6400000000000000000000000000000000000000000000000000000000000000602082015250565b6000610954602183610688565b915061095f826108f8565b604082019050919050565b6000602082019050818103600083015261098381610947565b9050919050565b7f54696d656c6f636b436f6e74726f6c6c65723a206e6f74207265616479000000600082015250565b60006109c0601d83610688565b91506109cb8261098a565b602082019050919050565b600060208201905081810360008301526109ef816109b3565b9050919050565b600081905092915050565b6000610a0d83856109f6565b9350610a1a83858461074b565b82840190509392505050565b6000610a33828486610a01565b91508190509392505050565b7f54696d656c6f636b436f6e74726f6c6c65723a2063616c6c206661696c656400600082015250565b6000610a75601f83610688565b9150610a8082610a3f565b602082019050919050565b60006020820190508181036000830152610aa481610a68565b905091905056fea2646970667358221220db5c729431da46910e4ca193b382e9cfb716a7cc076f10a40961b6b5eb84679d64736f6c63430008140033";

type TimelockControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TimelockControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TimelockController__factory extends ContractFactory {
  constructor(...args: TimelockControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _minDelay: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_minDelay, overrides || {});
  }
  override deploy(
    _minDelay: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_minDelay, overrides || {}) as Promise<
      TimelockController & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TimelockController__factory {
    return super.connect(runner) as TimelockController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimelockControllerInterface {
    return new Interface(_abi) as TimelockControllerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TimelockController {
    return new Contract(address, _abi, runner) as unknown as TimelockController;
  }
}