// SPDX-License-Identifier: UNLICENSED
// contracts to test deploy/DiamondTest2.ts

pragma solidity ^0.8.0;

contract DiamondUpgradeTest2Facet1_V1 {
    function getVersion() external pure returns (string memory) {
        return "0.0.1";
    }

    function foo() external pure returns (string memory) {
        return "foo_v1";
    }
}

contract DiamondUpgradeTest2Facet2_V1 {
    function bar() external pure returns (string memory) {
        return "bar_v1";
    }
}

contract DiamondUpgradeTest2Facet1_V2 {
    function getVersion() external pure returns (string memory) {
        return "0.0.2";
    }

    function foo() external pure returns (string memory) {
        return "foo_v2";
    }
}

contract DiamondUpgradeTest2Facet2_V2 {
    function bar() external pure returns (string memory) {
        return "bar_v2";
    }
}
