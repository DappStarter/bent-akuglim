require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other food birth rival oval minor honey light army gasp'; 
let testAccounts = [
"0xf3901a8d8cfe11fc5c128b46c582453226feb917c403fed428e7c9e22ca02eb9",
"0xf30c5f7dd5e4a8a71e8fa0753904b0e3b4c7d561480d5f5dc5587b03bb51838b",
"0x0c8dfd55ca310192d7c805da5916a0c550d65b7339dc2babf26210abea36658c",
"0xf88fed0cbef71c656f442f719a10995375da58621f6427a71af15580cc4aa671",
"0x35b3c11d342f2a613bd4a4048de74c11df91cadac4624f45375156e81675aed4",
"0x69e598fb40bfb0e69cc07d5909bfc5583c83e997f153be4148e912630347d1d9",
"0x6d08baae0188c7f5bcb2807e280b0d52d7de66986d7c347d4438e06925f9a188",
"0x91ccf904fb8db2a6614eada311f7c658fc147b24f39ab03a5e65ec1890f04847",
"0x9c868b6b260edb325001cceaf78f34f115f7df080b8b7b728aa6662b3e8a0377",
"0xca0bdb8726d4b1ee765385a1fceb3f72499735b357784a4a039e943d0e2362f4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
