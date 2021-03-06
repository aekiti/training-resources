// module.exports = {
//   // See <http://truffleframework.com/docs/advanced/configuration>
//   // to customize your Truffle configuration!
// };

require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    dev: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" 
    },
    test: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "9876" 
    }
  }
};