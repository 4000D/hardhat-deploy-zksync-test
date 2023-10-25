// SPDX-License-Identifier: UNLICENSED
// contracts to test deploy/ProxyUpgradeTest.ts

pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract ProxyUpgradeTest_V1 is Initializable {
    uint public value;

    constructor() {
        _disableInitializers();
    }

    function initialize() external initializer {
        // do nothing
    }

    function getVersion() external pure returns (string memory version) {
        return "0.0.1";
    }

    function set(uint _value) external {
        value = _value;
    }

    function get() external view returns (uint) {
        return value;
    }
}

contract ProxyUpgradeTest_V2 is Initializable {
    uint public value;

    constructor() {
        _disableInitializers();
    }

    function initialize() external initializer {
        // do nothing
    }

    function getVersion() external pure returns (string memory version) {
        return "0.0.2";
    }

    function set(uint _value) external {
        value = _value;
    }

    function get() external view returns (uint) {
        return value;
    }
}
