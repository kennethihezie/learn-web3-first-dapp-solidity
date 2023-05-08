// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
 

// ERC stands for Ethereum Request for Comment
// ERC-20 specifically is a standard which outlines the technical specification of a fungible token.
contract SlaveToken is ERC20 {
  constructor(string memory _name, string memory _symbol, uint256 _amount) ERC20(_name, _symbol){
    // ERC20 tokens by default work with 18 decimal places. 
    // So 1 full SlaveToken in this case, is actually represented 
    // as 10 ^ 18. Therefore, to get 10 full SlaveToken, we use 10 * 10 ** 18.
     _mint(msg.sender, _amount * 10 ** 18);
  }
}