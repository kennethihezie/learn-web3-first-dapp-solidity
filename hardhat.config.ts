import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-web3"

task("web3_accounts", "Prints accounts", async (_, { web3 }) => {
  console.log(await web3.eth.getAccounts());
});

const memonicPhrase = 'table multiply tree blood base knife keen sea police shield furnace wise'
const providerUrl = 'https://eth-goerli.g.alchemy.com/v2/nxWLuHSzs0hCAult-5SeCHB6qe_L2kKu'

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: providerUrl,
      accounts: {
        mnemonic: memonicPhrase
      }
    }
  }
};

export default config;
