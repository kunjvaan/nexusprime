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
  LendingPoolNovel,
  LendingPoolNovelInterface,
} from "../../../contracts/LendingPool.sol/LendingPoolNovel";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "AdminAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "AdminRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "batchKey",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "BatchCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "batchKey",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "processedCount",
        type: "uint256",
      },
    ],
    name: "BatchProcessed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "batchKey",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "oldStatus",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "newStatus",
        type: "uint8",
      },
    ],
    name: "BatchStatusChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
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
    name: "addAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "admins",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "users",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "createBatch",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getBatchByIndex",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "batchId",
        type: "uint256",
      },
    ],
    name: "getBatchStatus",
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
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getUserBatches",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "batchId",
        type: "uint256",
      },
    ],
    name: "processBatch",
    outputs: [],
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
    name: "removeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060016002819055503373ffffffffffffffffffffffffffffffffffffffff167f44d6d25963f097ad14f29f06854a01f575648a1ef82f30e562ccd3889717e33960405160405180910390a2611dda806100c26000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806375b238fc1161007157806375b238fc146101795780638456cb5914610197578063a85d63a9146101a1578063bcaa4665146101d1578063f05838fe14610201578063f1ab6dd51461021d576100b4565b8063164ac6db146100b95780631785f53c146100e95780633f4ba83a14610105578063429b62e51461010f5780635c975abb1461013f578063704802751461015d575b600080fd5b6100d360048036038101906100ce91906113cc565b61024d565b6040516100e0919061147a565b60405180910390f35b61010360048036038101906100fe9190611495565b610808565b005b61010d610a29565b005b61012960048036038101906101249190611495565b610b08565b60405161013691906114dd565b60405180910390f35b610147610b28565b60405161015491906114dd565b60405180910390f35b61017760048036038101906101729190611495565b610b3b565b005b610181610cef565b60405161018e919061147a565b60405180910390f35b61019f610d13565b005b6101bb60048036038101906101b6919061152e565b610df1565b6040516101c8919061147a565b60405180910390f35b6101eb60048036038101906101e6919061156e565b610e4f565b6040516101f8919061166c565b60405180910390f35b61021b6004803603810190610216919061152e565b610f27565b005b6102376004803603810190610232919061152e565b61120b565b60405161024491906116aa565b60405180910390f35b6000600160009054906101000a900460ff161561029f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029690611722565b60405180910390fd5b60028054036102e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102da9061178e565b60405180910390fd5b60028081905550828290508585905014610332576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610329906117fa565b60405180910390fd5b60008585905011610378576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036f90611866565b60405180910390fd5b6000600360008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050600081600201600081546103ce906118b5565b9190508190559050600088826040516020016103eb929190611966565b60405160208183030381529060405280519060200120905060006040518060e001604052808a8a90506fffffffffffffffffffffffffffffffff16815260200160006fffffffffffffffffffffffffffffffff168152602001600160ff168152602001600160ff1681526020014264ffffffffff16815260200162015180426104749190611992565b64ffffffffff168152602001600063ffffffff16815250905060008460000160008481526020019081526020016000209050818160000160008201518160000160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555060208201518160000160106101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555060408201518160010160006101000a81548160ff021916908360ff16021790555060608201518160010160016101000a81548160ff021916908360ff16021790555060808201518160010160026101000a81548164ffffffffff021916908364ffffffffff16021790555060a08201518160010160076101000a81548164ffffffffff021916908364ffffffffff16021790555060c082015181600101600c6101000a81548163ffffffff021916908363ffffffff1602179055509050506000805b8b8b905081101561074557898982818110610609576106086119c6565b5b905060200201358360020160008e8e85818110610629576106286119c6565b5b905060200201602081019061063e9190611495565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508660030160008d8d84818110610695576106946119c6565b5b90506020020160208101906106aa9190611495565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002086908060018154018082558091505060019003906000526020600020016000909190919091505589898281811061071e5761071d6119c6565b5b90506020020135826107309190611a11565b9150808061073d906118b5565b9150506105eb565b50808260000160000160106101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055508386600101600087815260200190815260200160002081905550846004600086815260200190815260200160002081905550837f142fb4f6af814b9c2a0fc64fa90bca80d84d17f165530aa799ede76f9882ec2e426040516107e69190611a64565b60405180910390a2839650505050505050600160028190555095945050505050565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610893576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088a90611acb565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610901576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f890611b37565b60405180910390fd5b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661098c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098390611ba3565b60405180910390fd5b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167fa3b62bc36326052d97ea62d63c3d60308ed4c3ea8ac079dd8499f1e9c4f80c0f60405160405180910390a250565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610ab4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aab90611acb565b60405180910390fd5b6000600160006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa33604051610afe9190611bd2565b60405180910390a1565b60006020528060005260406000206000915054906101000a900460ff1681565b600160009054906101000a900460ff1681565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610bc6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bbd90611acb565b60405180910390fd5b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610c52576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c4990611c39565b60405180910390fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167f44d6d25963f097ad14f29f06854a01f575648a1ef82f30e562ccd3889717e33960405160405180910390a250565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177581565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610d9e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d9590611acb565b60405180910390fd5b60018060006101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25833604051610de79190611bd2565b60405180910390a1565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101600083815260200190815260200160002054905092915050565b6060600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015610f1a57602002820191906000526020600020905b815481526020019060010190808311610f06575b5050505050905092915050565b600160009054906101000a900460ff1615610f77576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f6e90611722565b60405180910390fd5b6002805403610fbb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fb29061178e565b60405180910390fd5b6002808190555060008282604051602001610fd7929190611966565b6040516020818303038152906040528051906020012090506000600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008160000160008481526020019081526020016000209050600160ff168160000160010160009054906101000a900460ff1660ff16146110a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161109f90611ca5565b60405180910390fd5b42620151808260000160010160029054906101000a900464ffffffffff166110d09190611cd6565b64ffffffffff1611611117576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110e90611d5b565b60405180910390fd5b60008160000160010160009054906101000a900460ff16905060028260000160010160006101000a81548160ff021916908360ff160217905550600060048360000160010160006101000a81548160ff021916908360ff160217905550847fc6be91ec7f497697ce732d5e2ad8fb773bf1ce1c064a962f72581ec92d2a8c2b838560000160010160009054906101000a900460ff166040516111ba929190611d7b565b60405180910390a2847f8141291da19864535d4b685ac2884ed8d09a472bfe79fa58953043b627dd6d74826040516111f29190611a64565b60405180910390a2505050505060016002819055505050565b6000808383604051602001611221929190611966565b604051602081830303815290604052805190602001209050600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600082815260200190815260200160002060000160010160009054906101000a900460ff1691505092915050565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006112de826112b3565b9050919050565b6112ee816112d3565b81146112f957600080fd5b50565b60008135905061130b816112e5565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f84011261133657611335611311565b5b8235905067ffffffffffffffff81111561135357611352611316565b5b60208301915083602082028301111561136f5761136e61131b565b5b9250929050565b60008083601f84011261138c5761138b611311565b5b8235905067ffffffffffffffff8111156113a9576113a8611316565b5b6020830191508360208202830111156113c5576113c461131b565b5b9250929050565b6000806000806000606086880312156113e8576113e76112a9565b5b60006113f6888289016112fc565b955050602086013567ffffffffffffffff811115611417576114166112ae565b5b61142388828901611320565b9450945050604086013567ffffffffffffffff811115611446576114456112ae565b5b61145288828901611376565b92509250509295509295909350565b6000819050919050565b61147481611461565b82525050565b600060208201905061148f600083018461146b565b92915050565b6000602082840312156114ab576114aa6112a9565b5b60006114b9848285016112fc565b91505092915050565b60008115159050919050565b6114d7816114c2565b82525050565b60006020820190506114f260008301846114ce565b92915050565b6000819050919050565b61150b816114f8565b811461151657600080fd5b50565b60008135905061152881611502565b92915050565b60008060408385031215611545576115446112a9565b5b6000611553858286016112fc565b925050602061156485828601611519565b9150509250929050565b60008060408385031215611585576115846112a9565b5b6000611593858286016112fc565b92505060206115a4858286016112fc565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6115e3816114f8565b82525050565b60006115f583836115da565b60208301905092915050565b6000602082019050919050565b6000611619826115ae565b61162381856115b9565b935061162e836115ca565b8060005b8381101561165f57815161164688826115e9565b975061165183611601565b925050600181019050611632565b5085935050505092915050565b60006020820190508181036000830152611686818461160e565b905092915050565b600060ff82169050919050565b6116a48161168e565b82525050565b60006020820190506116bf600083018461169b565b92915050565b600082825260208201905092915050565b7f5061757365640000000000000000000000000000000000000000000000000000600082015250565b600061170c6006836116c5565b9150611717826116d6565b602082019050919050565b6000602082019050818103600083015261173b816116ff565b9050919050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b6000611778601f836116c5565b915061178382611742565b602082019050919050565b600060208201905081810360008301526117a78161176b565b9050919050565b7f4c656e677468206d69736d617463680000000000000000000000000000000000600082015250565b60006117e4600f836116c5565b91506117ef826117ae565b602082019050919050565b60006020820190508181036000830152611813816117d7565b9050919050565b7f456d707479206261746368000000000000000000000000000000000000000000600082015250565b6000611850600b836116c5565b915061185b8261181a565b602082019050919050565b6000602082019050818103600083015261187f81611843565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006118c0826114f8565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036118f2576118f1611886565b5b600182019050919050565b60008160601b9050919050565b6000611915826118fd565b9050919050565b60006119278261190a565b9050919050565b61193f61193a826112d3565b61191c565b82525050565b6000819050919050565b61196061195b826114f8565b611945565b82525050565b6000611972828561192e565b601482019150611982828461194f565b6020820191508190509392505050565b600061199d826114f8565b91506119a8836114f8565b92508282019050808211156119c0576119bf611886565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006fffffffffffffffffffffffffffffffff82169050919050565b6000611a1c826119f5565b9150611a27836119f5565b925082820190506fffffffffffffffffffffffffffffffff811115611a4f57611a4e611886565b5b92915050565b611a5e816114f8565b82525050565b6000602082019050611a796000830184611a55565b92915050565b7f4e6f7420616e2061646d696e0000000000000000000000000000000000000000600082015250565b6000611ab5600c836116c5565b9150611ac082611a7f565b602082019050919050565b60006020820190508181036000830152611ae481611aa8565b9050919050565b7f43616e6e6f742072656d6f76652073656c660000000000000000000000000000600082015250565b6000611b216012836116c5565b9150611b2c82611aeb565b602082019050919050565b60006020820190508181036000830152611b5081611b14565b9050919050565b7f4e6f742061646d696e0000000000000000000000000000000000000000000000600082015250565b6000611b8d6009836116c5565b9150611b9882611b57565b602082019050919050565b60006020820190508181036000830152611bbc81611b80565b9050919050565b611bcc816112d3565b82525050565b6000602082019050611be76000830184611bc3565b92915050565b7f416c72656164792061646d696e00000000000000000000000000000000000000600082015250565b6000611c23600d836116c5565b9150611c2e82611bed565b602082019050919050565b60006020820190508181036000830152611c5281611c16565b9050919050565b7f496e76616c696420626174636820737461747573000000000000000000000000600082015250565b6000611c8f6014836116c5565b9150611c9a82611c59565b602082019050919050565b60006020820190508181036000830152611cbe81611c82565b9050919050565b600064ffffffffff82169050919050565b6000611ce182611cc5565b9150611cec83611cc5565b9250828201905064ffffffffff811115611d0957611d08611886565b5b92915050565b7f4261746368206578706972656400000000000000000000000000000000000000600082015250565b6000611d45600d836116c5565b9150611d5082611d0f565b602082019050919050565b60006020820190508181036000830152611d7481611d38565b9050919050565b6000604082019050611d90600083018561169b565b611d9d602083018461169b565b939250505056fea264697066735822122073e9cf86cc913fbbabd61106d99e2e5acc05ccf992e98e8343246b605fed68bc64736f6c63430008140033";

type LendingPoolNovelConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LendingPoolNovelConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LendingPoolNovel__factory extends ContractFactory {
  constructor(...args: LendingPoolNovelConstructorParams) {
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
      LendingPoolNovel & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): LendingPoolNovel__factory {
    return super.connect(runner) as LendingPoolNovel__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LendingPoolNovelInterface {
    return new Interface(_abi) as LendingPoolNovelInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): LendingPoolNovel {
    return new Contract(address, _abi, runner) as unknown as LendingPoolNovel;
  }
}