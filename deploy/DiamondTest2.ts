import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

// deploy with artifact name provided
const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { diamond, read } = deployments;

  const { deployer } = await getNamedAccounts();

  // initial deploy
  console.log("\ndeploy DiamondUpgradeTest2");
  await diamond.deploy("DiamondUpgradeTest2", {
    from: deployer,
    log: true,
    owner: deployer, // diamond owner

    facets: ["DiamondUpgradeTest2Facet1_V1", "DiamondUpgradeTest2Facet2_V1"],

    waitConfirmations: 1,

    diamondContract: "Diamond",
    defaultCutFacetContract: "DiamondCutFacet",
    defaultLoupeFacetContract: "DiamondLoupeFacet",
    defaultOwnershipFacetContract: "OwnershipFacet",
    defaultERC165InitContract: "DiamondERC165Init",
  });

  console.log("version", await read("DiamondUpgradeTest2", "getVersion"));
  console.log("foo", await read("DiamondUpgradeTest2", "foo"));
  console.log("bar", await read("DiamondUpgradeTest2", "bar"));

  // upgrade
  console.log("upgrade diamond");
  await diamond.deploy("DiamondUpgradeTest2", {
    from: deployer,
    log: true,
    owner: deployer, // diamond owner

    facets: ["DiamondUpgradeTest2Facet1_V2", "DiamondUpgradeTest2Facet2_V2"],

    waitConfirmations: 1,

    diamondContract: "Diamond",
    defaultCutFacetContract: "DiamondCutFacet",
    defaultLoupeFacetContract: "DiamondLoupeFacet",
    defaultOwnershipFacetContract: "OwnershipFacet",
    defaultERC165InitContract: "DiamondERC165Init",
  });

  console.log("version", await read("DiamondUpgradeTest2", "getVersion"));
  console.log("foo", await read("DiamondUpgradeTest2", "foo"));
  console.log("bar", await read("DiamondUpgradeTest2", "bar"));
};
export default func;
func.tags = ["DiamondUpgradeTest2"];
