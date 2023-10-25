// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/proxy/transparent/ProxyAdmin.sol";

// hardhat-deploy diamond
import "hardhat-deploy/solc_0.8/diamond/Diamond.sol";
import "hardhat-deploy/solc_0.8/diamond/UsingDiamondOwner.sol";
import "hardhat-deploy/solc_0.8/diamond/facets/DiamondCutFacet.sol";
import "hardhat-deploy/solc_0.8/diamond/facets/DiamondLoupeFacet.sol";
import "hardhat-deploy/solc_0.8/diamond/facets/DiamondLoupeFacetWithoutSupportsInterface.sol";
import "hardhat-deploy/solc_0.8/diamond/facets/OwnershipFacet.sol";
import "hardhat-deploy/solc_0.8/diamond/initializers/DiamondERC165Init.sol";
import "hardhat-deploy/solc_0.8/diamond/interfaces/IDiamondCut.sol";
import "hardhat-deploy/solc_0.8/diamond/interfaces/IDiamondLoupe.sol";
import "hardhat-deploy/solc_0.8/diamond/interfaces/IERC165.sol";
import "hardhat-deploy/solc_0.8/diamond/interfaces/IERC173.sol";
import "hardhat-deploy/solc_0.8/diamond/libraries/LibDiamond.sol";
