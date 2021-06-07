require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name rebel place honey guess brass furnace genuine'; 
let testAccounts = [
"0x4a4d292fc43bd6382059db4cef6614ad751d63410825717d9e38846e38e27a88",
"0xa3b08648cecf42fd5919d8a3b1f087c6b3642c7bbfb23ace1a1a8fca1b5598f9",
"0x401c24a522d399a4929d6a2f5542d61e9349bc60a1751d4ffe378695ab009432",
"0x5b8b77a7e1885c849d12bcb1fdc037aa655bc59fc0dd8bb43f315324c7c67ddd",
"0x261559cd2e9090f0e6ff5e744e92aec43d656bbf2189f52f850180638e6bef81",
"0x10b161f3f6d424385f907ccb9bd58e183f4e7493c79fb195674f7956a3bd4bc2",
"0x35aad2601a90880f627d4c8de29620b01af52beff2d7bc7bc82572f7c1cbcadf",
"0x33dd725dd6982eba41208b04f9276fea1cef6493bb610fb1ed51a9ca206f89df",
"0x3f40f59822f628b8d6f90f05e083b4d2d59a7b57ec19022f4851acedc7981bee",
"0x4fd3ee70abca322f3e86b369eb7a1fb357f637b9b434b3cf3a4eab03630c3319"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

