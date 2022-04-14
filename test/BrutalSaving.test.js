const {assert} = require('chai');
const Web3 = require('web3');

const Brutalsaving = artifacts.require("./Brutalsaving");

require('chai')
.use(require('chai-as-promised'))
.should();

contract ('Brutalsaving', (accounts) => {
    let contract;

    before (async () => {
        contract = await Brutalsaving.deployed();
    })
    

    describe('deployement', async() => {
        it('deploys successfully', async() => {
            const address = contract.address;
            assert.notEqual(address, 0x0);
            assert.notEqual(address, '');
            assert.notEqual(address, null);
            assert.notEqual(address, undefined);
        });

        it('First address is 0x00', async() => {
            const currentAddress = await contract.currentAddress();
            assert.equal(currentAddress, '0x0000000000000000000000000000000000000000');
        });
    })

    describe('fund and withdraw', async() => {
        it('fund successfully', async() => {
            const result = await contract.fund({value: '10000000000'});
            Balance = await contract. balanceofSC();
            assert.equal(Balance, '10000000000');
        });
    })
})