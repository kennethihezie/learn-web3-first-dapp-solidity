import { web3 } from "hardhat";
const { abi, bytecode } = require('../config')
import assert from 'assert'

let accounts: Array<string>
let contract: any
const INITIAL_SUPPLY = 1000

beforeEach(async () => {
  accounts = await web3.eth.getAccounts()
  contract = await new web3.eth.Contract(abi)
    // .deploy({ data: bytecode, arguments: ['SlaveToken', 'SLVT', INITIAL_SUPPLY] })
    .deploy({ data: bytecode, arguments: ['PunishNft', 'PFT'] })
    .send({ from: accounts[0], gas: 1000000 })
})

describe('Mood Contract', async () => {
  it('deploys contract', async () => {
    assert.ok(contract.options.address)
  })

  // it('set mood and get mood', async () => {
  //   // await contract.methods.setMood('learning').call({ from: accounts[0] })
  //   const mood = await contract.methods.getMood().call({ from: accounts[0] })
  //   assert.equal('mood', mood)
  // })

  it('get deployer balance', async () => {
    const balance = await web3.eth.getBalance(accounts[0])
    console.log(balance);
  })
})

