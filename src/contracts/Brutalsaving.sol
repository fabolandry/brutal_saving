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
        require(msg.sender == currentAddress);
        if (block.timestamp < unlockDate) {
            return "Cannot withdraw yet";
        } else {
        address payable payable_addr = payable(currentAddress);
        payable_addr.transfer(address(this).balance);
        }
    }

    function balanceofSC() public view returns (uint256) {
        return address(this).balance;
    }
}