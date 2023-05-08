import { web3 } from "hardhat";
const { abi, bytecode } = require('../config')

async function main() {
  const accounts = await web3.eth.getAccounts()
  
  const result = await new web3.eth.Contract(abi)
       .deploy({ data: bytecode, arguments: ['PunishNft', 'PFT'] })
       .send({ gas: 10000000, from: accounts[0] })

       console.log('Contracts deployed at: ' + result.options.address);
}

// mood Contracts deployed at: 0x6fd35043d3f463421EcBE1E24F83496a12DF235d
// slave token contract deployed at: 0xf8D6Ba3b998b0717996efFba7283252f4FBc18fd
// punish nft contract deployed at: 0x2787C2AF3E08D0cC4cc3B8729c3EFFeD755be6b7

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
