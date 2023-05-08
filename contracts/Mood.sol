// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Mood {
    string public mood;

    constructor(string memory initialMood) {
        mood = initialMood;
    }

    function setMood(string memory _mood) public {
        mood = _mood;
        // console.log('MOOD_ONE: %s', mood);
    }

    function getMood() public view returns(string memory) {
        // console.log('MOOD_TWO: %s', mood);
        return mood;
    }
}
