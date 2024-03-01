require('@nomicfoundation/hardhat-toolbox')
// require('@nomiclabs/hardhat-ethers');

// const INFURA_API_KEY = "9c4d37d7dd984bb2b652d085e142ddf5";

const SEPOLIA_PRIVATE_KEY =
  '74575ba404901e7dbaf30578fb6706d08fe2e6781e5438f0a95c5e0ec2ce487b'

const hardhatKey =
  '0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e'

module.exports = {
  solidity: { version: '0.8.20' },

  networks: {
    testnet: {
      url: 'https://sepolia.infura.io/v3/9c4d37d7dd984bb2b652d085e142ddf5',
      accounts: [SEPOLIA_PRIVATE_KEY],
      chainId: 11155111,
    },

    hardhat: {
      // url: 'http://127.0.0.1:8545/',
      accounts: [
        {
          privateKey: hardhatKey,
          balance: '10000000000000000000000',
        },
      ],
      chainId: 31337,
    },
  },
}
