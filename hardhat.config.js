require("@nomiclabs/hardhat-waffle");
const dotenv = require("dotenv");
dotenv.config();
console.log("infura endpoint", process.env.REACT_APP_INFURA_ENDPOINT);
console.log("priv_key", process.env.REACT_APP_PRIV_KEY);

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    hardhat: {},
    rinkeby: {
      url: process.env.REACT_APP_INFURA_ENDPOINT,
      accounts: [process.env.REACT_APP_PRIV_KEY],
    },
  },
  solidity: "0.8.4",
};
