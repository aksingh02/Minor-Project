
require("@nomiclabs/hardhat-waffle")
module.exports={
  solidity: "0.8.9",

  networks: {
    hardhat: {
      chainId: 1337
    },
    goerli:{
      url: "https://eth-goerli.g.alchemy.com/v2/_bynsmRZcZf0ONxMRNIqFhL2LUJfy7_5",
      accounts: ["a545811e5e950d33b51de208c7ab3a03426a5eb8a2e0d6f323b2c4f15413410a"]
    }
  }
}

// https://eth-rinkeby.alchemyapi.io/v2/xDBLWgwe-guPU5MgiFrpGFDse4wFfKfL
//0x8A8Ab1AaC9e98e839362Ad10BEbA0C56aF070839