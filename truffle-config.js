const HDWalletProvider = require("@truffle/hdwallet-provider")
const keys = require("./keys.json") 

module.exports = {
  contracts_build_directory: "./public/contracts",
  networks: {
    development: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*",
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider({
          mnemonic: {
            phrase: keys.MNEMONIC
          },
          providerOrUrl: `https://ropsten.infura.io/v3/${keys.INFURA_PROJECT_ID}`,
          addressIndex: 0
        }),
      network_id: 3,
      gas: 5500000, // Gas Limit (How much are we willing to spend)
      gasPrice: 20000000000, // How much will we spend for the unit of gas
      confirmations: 2, // Number of blocks to wait between deployment
      timeoutBlocks: 200 // Number of blocks before deployment times out
    }
  },
  compilers: {
    solc: {
      version: "0.8.4",
    }
  }
}

//5500000 * 20000000000 = 110000000000000000 = 0,11 ETH = 292 USD aprox.
//transaction hash:    0x55f5e7f47bca9f60d804f16a9f631e0610e4836214c15576cf4c27434adca130
//contract address:    0x92E115DB362F2A080B895B37796e760Abe23b261
