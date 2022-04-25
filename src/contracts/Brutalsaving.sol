// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract BrutalSaving {

    mapping(address => uint256) public addressToAmountFunded; 
    //get the amount funded by an address
    struct TransactionD {
        uint256 Amount;
        uint256 Wdate;
        uint256 Ttime;
    }
    //collect transaction data 
    mapping (address => TransactionD) Ttransactions;
    //Map adrress to transaction data collected 
    address[] public TransactionData;
    //Save all address send fund in a array
    function fund(uint256 _unlockDate) public payable {
        TransactionD storage transac = Ttransactions[msg.sender]; //Add new transaction to mapping and struct
        addressToAmountFunded[msg.sender] += msg.value; //Add 
        transac.Amount = msg.value;
        transac.Wdate = _unlockDate;
        transac.Ttime = block.timestamp;
        TransactionData.push(msg.sender);
    }

    function getTransac() view public returns(address[] memory) {
        return TransactionData;
    }

    function getWdate(address _address) view public returns (uint) {
        return Ttransactions[_address].Wdate;
    }

    function withdraw() public payable returns (string memory withrawmsg) {
        if (block.timestamp < getWdate(msg.sender)) {
            withrawmsg = "Cannot withdraw yet";
            return withrawmsg;
        } else {
            address payable payable_addr = payable(msg.sender);
            uint256 wAmount = addressToAmountFunded[msg.sender];
            payable_addr.transfer(wAmount);
            addressToAmountFunded[msg.sender] -= wAmount;
        }
    }

    function balanceofSC() public view returns (uint256) {
        return address(this).balance;
    }
}