// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Mood {
    string public mood;

    function setMood(string memory _mood) public {
        mood = _mood;
    }

    function getMood() public view returns(string memory) {
        console.log('MOOD: %s', mood);
        return mood;
    }
}
