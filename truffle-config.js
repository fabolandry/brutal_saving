var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "jewel eye brisk rose powder cause surprise hill once history awesome junior";

module.exports = {

  networks: {
    development: {
    host: "127.0.0.1",     // Localhost (default: none)
    port: 7545,            // Standard Ethereum port (default: none)
    network_id: "*",       // Any network (default: none)
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic,
          "https://rinkeby.infura.io/v3/8a03257f20f349ba86946846d73fa16f");
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    }  
  },
  contracts_directory : './src/contracts/',
  contracts_build_directory : './src/abis',

  compilers: {
    solc: {
      version: "^0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
      optimizer:{
        enabled: "true",
        runs: 200
      }
    }
  },

};
