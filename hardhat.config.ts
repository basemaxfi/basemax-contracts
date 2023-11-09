import {HardhatUserConfig} from "hardhat/types";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-gas-reporter";
import 'hardhat-contract-sizer';
// import "@typechain/hardhat";
import "solidity-coverage";

const {

    BASE_API_KEY,
    BASE_URL,
    BASE_DEPLOY_KEY
} = require("./env.json")
const config: HardhatUserConfig = {
    defaultNetwork: 'hardhat',

    networks: {
        localhost: {
            timeout: 120000,
            saveDeployments: true,
            live: true,
        },


        base: {
            url: BASE_URL,
            // gasPrice: 60000005,
            accounts: [BASE_DEPLOY_KEY],
            verify: {
                etherscan: {
                    apiKey: BASE_API_KEY,
                    apiUrl: "https://api.basescan.org",
                }
            }
        }
    },

    solidity: {
        compilers: [
            {
                version: '0.6.12', settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
            {
                version: '0.7.6', settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200
                    }
                }
            },
            {
                version: '0.8.9', settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
            {
                version: '0.8.16', settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
        ],
        overrides: {}
    },
};

export default config;
