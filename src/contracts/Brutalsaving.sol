// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract BrutalSaving {
    mapping(address => uint256) public addressToAmountFunded;
    address public currentAddress;

    function fund() public payable {
        currentAddress = msg.sender;
        addressToAmountFunded[msg.sender] += msg.value;
    }

    function withdraw() public payable {
        address payable payable_addr = payable(currentAddress);
        payable_addr.transfer(address(this).balance);
    }

    function balanceofSC() public view returns (uint256) {
        return address(this).balance;
    }

}