var fs = require("fs");
var path = require("path");
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = fs.readFileSync(path.join(__dirname, "deploy_mnemonic.key"), {encoding: "utf8"}).trim();

module.exports = {

  networks: {
    development: {
    host: "127.0.0.1",     // Localhost (default: none)
    port: 7545,            // Standard Ethereum port (default: none)
    network_id: "*",       // Any network (default: none)
    },
    mainnet: {
      provider: function() {
        return new HDWalletProvider(mnemonic,
          "https://mainnet.infura.io/v3/d76dd88efd4c40649ee1716420ebef5c");
      },
      network_id: 1,
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
