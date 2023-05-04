import { web3 } from "hardhat";
const { abi, bytecode } = require('../config')
import assert from 'assert'

let accounts: Array<string>
let contract: any

beforeEach(async () => {
  accounts = await web3.eth.getAccounts()
  contract = await new web3.eth.Contract(abi)
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: 1000000 })
})

describe('Mood Contract', async () => {
  it('deploys contract', async () => {
    assert.ok(contract.options.address)
  })

  it('set mood and get mood', async () => {
    await contract.methods.setMood('Learning').call({ from: accounts[0] })
    const mood = await contract.methods.getMood().call({ from: accounts[0] })

    assert.equal('Learning', mood)
  })
})

