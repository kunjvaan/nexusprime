// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PropertyToken is ERC721URIStorage, Ownable {
   uint256 private _nextTokenId;

   constructor(address initialOwner) ERC721("PropertyToken", "PTK") Ownable(initialOwner) {
       _nextTokenId = 0; // Start at 0
   }

   function mint(address to, string memory uri) external onlyOwner returns (uint256) {
       uint256 tokenId = _nextTokenId;
       _safeMint(to, tokenId);
       _setTokenURI(tokenId, uri);
       _nextTokenId++;
       return tokenId;
   }
}