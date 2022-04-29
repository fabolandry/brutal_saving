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
    //Save all address sending fund in a array
    function fund(uint256 _unlockDate) public payable {
        TransactionD storage transac = Ttransactions[msg.sender]; //Add new transaction to mapping and struct
        addressToAmountFunded[msg.sender] += msg.value; //Add funding amount to mapping
        transac.Amount = msg.value; //Add funding amount to struct
        transac.Wdate = _unlockDate; //Add unlock date to struct
        transac.Ttime = block.timestamp; //Add transaction time to struct
        TransactionData.push(msg.sender); //Add address to transaction address array
    }

    function getTransac() view public returns(address[] memory) {
        return TransactionData; //Return all address sending fund
    }

    function getWdate(address _address) view public returns (uint) {
        return Ttransactions[_address].Wdate; //Return unlock date of address
    }

    function withdraw() public payable returns (string memory withrawmsg) {
        if (block.timestamp < getWdate(msg.sender)) {
            withrawmsg = "Cannot withdraw yet. CryptoBamsOkay";    //Return message if cannot withdraw yet
            return withrawmsg;
        } else {
            address payable payable_addr = payable(msg.sender); //Get payable address
            uint256 wAmount = addressToAmountFunded[msg.sender]; //Get amount to withdraw
            addressToAmountFunded[msg.sender] -= wAmount; //Subtract amount from mapping
            payable_addr.transfer(wAmount); //Transfer amount to payable address
        }
    }

    function balanceofSC() public view returns (uint256) {
        return address(this).balance; //Return balance of contract
    }
}