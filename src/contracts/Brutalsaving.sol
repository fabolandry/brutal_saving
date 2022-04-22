// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract BrutalSaving {
    mapping(address => uint256) public addressToAmountFunded;
    address public currentAddress;
    uint256 public unlockDate;
    uint256 public currentTime = block.timestamp;

    function fund(uint256 _unlockDate) public payable {
        unlockDate = _unlockDate;
        currentAddress = msg.sender;
        addressToAmountFunded[msg.sender] += msg.value;
    }

    function withdraw() public payable returns (string memory withrawmsg) {
        currentAddress = msg.sender;
        if (block.timestamp < unlockDate) {
            withrawmsg = "Cannot withdraw yet";
            return withrawmsg;
        } else {
        address payable payable_addr = payable(currentAddress);
        payable_addr.transfer(addressToAmountFunded[currentAddress]);
        }
    }

    function balanceofSC() public view returns (uint256) {
        return address(this).balance;
    }
}