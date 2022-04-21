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
          "https://rinkeby.infura.io/v3/d76dd88efd4c40649ee1716420ebef5c");
      },
      network_id: 4,
      timeoutBlocks: 200
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
