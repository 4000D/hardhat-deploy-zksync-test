import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

// deploy with artifact and name provided
const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { diamond, read, getArtifact } = deployments;

  const { deployer } = await getNamedAccounts();

  // initial deploy
  console.log("\ndeploy DiamondUpgradeTest");
  await diamond.deploy("DiamondUpgradeTest", {
    from: deployer,
    log: true,
    owner: deployer, // diamond owner

    facets: ["DiamondUpgradeTestFacet1_V1", "DiamondUpgradeTestFacet2_V1"],

    waitConfirmations: 1,

    diamondContract: await getArtifact("Diamond"),
    defaultCutFacetContract: {
      name: "_DefaultDiamondCutFacet",
      artifact: await getArtifact("DiamondCutFacet"),
    },
    defaultLoupeFacetContract: {
      name: "_DefaultDiamondLoupeFacet",
      artifact: await getArtifact("DiamondLoupeFacet"),
    },
    defaultOwnershipFacetContract: {
      name: "_DefaultOwnershipFacet",
      artifact: await getArtifact("OwnershipFacet"),
    },
    defaultERC165InitContract: {
      name: "_DefaultDiamondERC165Init",
      artifact: await getArtifact("DiamondERC165Init"),
    },
  });

  console.log("version", await read("DiamondUpgradeTest", "getVersion"));
  console.log("foo", await read("DiamondUpgradeTest", "foo"));
  console.log("bar", await read("DiamondUpgradeTest", "bar"));

  // upgrade
  console.log("upgrade diamond");
  await diamond.deploy("DiamondUpgradeTest", {
    from: deployer,
    log: true,
    owner: deployer, // diamond owner

    facets: ["DiamondUpgradeTestFacet1_V2", "DiamondUpgradeTestFacet2_V2"],

    waitConfirmations: 1,

    diamondContract: await getArtifact("Diamond"),
    defaultCutFacetContract: {
      name: "_DefaultDiamondCutFacet",
      artifact: await getArtifact("DiamondCutFacet"),
    },
    defaultLoupeFacetContract: {
      name: "_DefaultDiamondLoupeFacet",
      artifact: await getArtifact("DiamondLoupeFacet"),
    },
    defaultOwnershipFacetContract: {
      name: "_DefaultOwnershipFacet",
      artifact: await getArtifact("OwnershipFacet"),
    },
    defaultERC165InitContract: {
      name: "_DefaultDiamondERC165Init",
      artifact: await getArtifact("DiamondERC165Init"),
    },
  });

  console.log("version", await read("DiamondUpgradeTest", "getVersion"));
  console.log("foo", await read("DiamondUpgradeTest", "foo"));
  console.log("bar", await read("DiamondUpgradeTest", "bar"));
};
export default func;
func.tags = ["DiamondUpgradeTest"];
