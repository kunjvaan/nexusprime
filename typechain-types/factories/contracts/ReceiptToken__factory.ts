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
import type { NonPayableOverrides } from "../../common";
import type {
  ReceiptToken,
  ReceiptTokenInterface,
} from "../../contracts/ReceiptToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
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
    inputs: [],
    name: "BURNER_ROLE",
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
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
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
    inputs: [],
    name: "LENDING_POOL_ROLE",
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
    inputs: [],
    name: "MINTER_ROLE",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
    inputs: [],
    name: "lendingPool",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lendingPool",
        type: "address",
      },
    ],
    name: "setLendingPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
  "0x60806040523480156200001157600080fd5b506040518060400160405280600d81526020017f5265636569707420546f6b656e000000000000000000000000000000000000008152506040518060400160405280600481526020017f72544b4e0000000000000000000000000000000000000000000000000000000081525081600390816200008f9190620004b1565b508060049081620000a19190620004b1565b505050620000b96000801b33620000c060201b60201c565b5062000598565b6000620000d48383620001c460201b60201c565b620001b95760016005600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620001556200022f60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019050620001be565b600090505b92915050565b60006005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002b957607f821691505b602082108103620002cf57620002ce62000271565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620003397fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620002fa565b620003458683620002fa565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620003926200038c62000386846200035d565b62000367565b6200035d565b9050919050565b6000819050919050565b620003ae8362000371565b620003c6620003bd8262000399565b84845462000307565b825550505050565b600090565b620003dd620003ce565b620003ea818484620003a3565b505050565b5b81811015620004125762000406600082620003d3565b600181019050620003f0565b5050565b601f82111562000461576200042b81620002d5565b6200043684620002ea565b8101602085101562000446578190505b6200045e6200045585620002ea565b830182620003ef565b50505b505050565b600082821c905092915050565b6000620004866000198460080262000466565b1980831691505092915050565b6000620004a1838362000473565b9150826002028217905092915050565b620004bc8262000237565b67ffffffffffffffff811115620004d857620004d762000242565b5b620004e48254620002a0565b620004f182828562000416565b600060209050601f83116001811462000529576000841562000514578287015190505b62000520858262000493565b86555062000590565b601f1984166200053986620002d5565b60005b8281101562000563578489015182556001820191506020850194506020810190506200053c565b868310156200058357848901516200057f601f89168262000473565b8355505b6001600288020188555050505b505050505050565b61195c80620005a86000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c806340c10f19116100c3578063a59a99731161007c578063a59a9973146103b2578063a9059cbb146103d0578063d539139314610400578063d547741f1461041e578063dd62ed3e1461043a578063e02686361461046a5761014d565b806340c10f19146102de57806370a08231146102fa57806391d148541461032a57806395d89b411461035a5780639dc29fac14610378578063a217fddf146103945761014d565b806323b872dd1161011557806323b872dd1461020a578063248a9ca31461023a578063282c51f31461026a5780632f2ff15d14610288578063313ce567146102a457806336568abe146102c25761014d565b806301ffc9a71461015257806306fdde0314610182578063095ea7b3146101a0578063113aa8b1146101d057806318160ddd146101ec575b600080fd5b61016c60048036038101906101679190611402565b610488565b604051610179919061144a565b60405180910390f35b61018a610502565b60405161019791906114f5565b60405180910390f35b6101ba60048036038101906101b591906115ab565b610594565b6040516101c7919061144a565b60405180910390f35b6101ea60048036038101906101e591906115eb565b6105b7565b005b6101f4610634565b6040516102019190611627565b60405180910390f35b610224600480360381019061021f9190611642565b61063e565b604051610231919061144a565b60405180910390f35b610254600480360381019061024f91906116cb565b61066d565b6040516102619190611707565b60405180910390f35b61027261068d565b60405161027f9190611707565b60405180910390f35b6102a2600480360381019061029d9190611722565b6106b1565b005b6102ac6106d3565b6040516102b9919061177e565b60405180910390f35b6102dc60048036038101906102d79190611722565b6106dc565b005b6102f860048036038101906102f391906115ab565b610757565b005b610314600480360381019061030f91906115eb565b610790565b6040516103219190611627565b60405180910390f35b610344600480360381019061033f9190611722565b6107d8565b604051610351919061144a565b60405180910390f35b610362610843565b60405161036f91906114f5565b60405180910390f35b610392600480360381019061038d91906115ab565b6108d5565b005b61039c61090e565b6040516103a99190611707565b60405180910390f35b6103ba610915565b6040516103c791906117a8565b60405180910390f35b6103ea60048036038101906103e591906115ab565b61093b565b6040516103f7919061144a565b60405180910390f35b61040861095e565b6040516104159190611707565b60405180910390f35b61043860048036038101906104339190611722565b610982565b005b610454600480360381019061044f91906117c3565b6109a4565b6040516104619190611627565b60405180910390f35b610472610a2b565b60405161047f9190611707565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806104fb57506104fa82610a4f565b5b9050919050565b60606003805461051190611832565b80601f016020809104026020016040519081016040528092919081815260200182805461053d90611832565b801561058a5780601f1061055f5761010080835404028352916020019161058a565b820191906000526020600020905b81548152906001019060200180831161056d57829003601f168201915b5050505050905090565b60008061059f610ab9565b90506105ac818585610ac1565b600191505092915050565b6000801b6105c481610ad3565b81600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061062f7fa05e016071881d2170d364744d63b2e41aeb933bc5c5727596db7b66f663c3ea83610ae7565b505050565b6000600254905090565b600080610649610ab9565b9050610656858285610bd9565b610661858585610c6d565b60019150509392505050565b600060056000838152602001908152602001600020600101549050919050565b7f3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a84881565b6106ba8261066d565b6106c381610ad3565b6106cd8383610ae7565b50505050565b60006012905090565b6106e4610ab9565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610748576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107528282610d61565b505050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a661078181610ad3565b61078b8383610e54565b505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60006005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60606004805461085290611832565b80601f016020809104026020016040519081016040528092919081815260200182805461087e90611832565b80156108cb5780601f106108a0576101008083540402835291602001916108cb565b820191906000526020600020905b8154815290600101906020018083116108ae57829003601f168201915b5050505050905090565b7f3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a8486108ff81610ad3565b6109098383610ed6565b505050565b6000801b81565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080610946610ab9565b9050610953818585610c6d565b600191505092915050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61098b8261066d565b61099481610ad3565b61099e8383610d61565b50505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b7fa05e016071881d2170d364744d63b2e41aeb933bc5c5727596db7b66f663c3ea81565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b610ace8383836001610f58565b505050565b610ae481610adf610ab9565b61112f565b50565b6000610af383836107d8565b610bce5760016005600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610b6b610ab9565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019050610bd3565b600090505b92915050565b6000610be584846109a4565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610c675781811015610c57578281836040517ffb8f41b2000000000000000000000000000000000000000000000000000000008152600401610c4e93929190611863565b60405180910390fd5b610c6684848484036000610f58565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610cdf5760006040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610cd691906117a8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d515760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610d4891906117a8565b60405180910390fd5b610d5c838383611180565b505050565b6000610d6d83836107d8565b15610e495760006005600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610de6610ab9565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a460019050610e4e565b600090505b92915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ec65760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610ebd91906117a8565b60405180910390fd5b610ed260008383611180565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f485760006040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610f3f91906117a8565b60405180910390fd5b610f5482600083611180565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610fca5760006040517fe602df05000000000000000000000000000000000000000000000000000000008152600401610fc191906117a8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361103c5760006040517f94280d6200000000000000000000000000000000000000000000000000000000815260040161103391906117a8565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508015611129578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516111209190611627565b60405180910390a35b50505050565b61113982826107d8565b61117c5780826040517fe2517d3f00000000000000000000000000000000000000000000000000000000815260040161117392919061189a565b60405180910390fd5b5050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036111d25780600260008282546111c691906118f2565b925050819055506112a5565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561125e578381836040517fe450d38c00000000000000000000000000000000000000000000000000000000815260040161125593929190611863565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036112ee578060026000828254039250508190555061133b565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516113989190611627565b60405180910390a3505050565b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6113df816113aa565b81146113ea57600080fd5b50565b6000813590506113fc816113d6565b92915050565b600060208284031215611418576114176113a5565b5b6000611426848285016113ed565b91505092915050565b60008115159050919050565b6114448161142f565b82525050565b600060208201905061145f600083018461143b565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561149f578082015181840152602081019050611484565b60008484015250505050565b6000601f19601f8301169050919050565b60006114c782611465565b6114d18185611470565b93506114e1818560208601611481565b6114ea816114ab565b840191505092915050565b6000602082019050818103600083015261150f81846114bc565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061154282611517565b9050919050565b61155281611537565b811461155d57600080fd5b50565b60008135905061156f81611549565b92915050565b6000819050919050565b61158881611575565b811461159357600080fd5b50565b6000813590506115a58161157f565b92915050565b600080604083850312156115c2576115c16113a5565b5b60006115d085828601611560565b92505060206115e185828601611596565b9150509250929050565b600060208284031215611601576116006113a5565b5b600061160f84828501611560565b91505092915050565b61162181611575565b82525050565b600060208201905061163c6000830184611618565b92915050565b60008060006060848603121561165b5761165a6113a5565b5b600061166986828701611560565b935050602061167a86828701611560565b925050604061168b86828701611596565b9150509250925092565b6000819050919050565b6116a881611695565b81146116b357600080fd5b50565b6000813590506116c58161169f565b92915050565b6000602082840312156116e1576116e06113a5565b5b60006116ef848285016116b6565b91505092915050565b61170181611695565b82525050565b600060208201905061171c60008301846116f8565b92915050565b60008060408385031215611739576117386113a5565b5b6000611747858286016116b6565b925050602061175885828601611560565b9150509250929050565b600060ff82169050919050565b61177881611762565b82525050565b6000602082019050611793600083018461176f565b92915050565b6117a281611537565b82525050565b60006020820190506117bd6000830184611799565b92915050565b600080604083850312156117da576117d96113a5565b5b60006117e885828601611560565b92505060206117f985828601611560565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061184a57607f821691505b60208210810361185d5761185c611803565b5b50919050565b60006060820190506118786000830186611799565b6118856020830185611618565b6118926040830184611618565b949350505050565b60006040820190506118af6000830185611799565b6118bc60208301846116f8565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006118fd82611575565b915061190883611575565b92508282019050808211156119205761191f6118c3565b5b9291505056fea2646970667358221220a6d76982626bd7e7685defe048e350e8f4e65b5af87615384b1fa8503174e45564736f6c63430008140033";

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