import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy, read } = deployments;

  const { deployer } = await getNamedAccounts();

  // deploy custom proxy admin
  await deploy("ProxyAdmin", {
    from: deployer,
    log: true,
    waitConfirmations: 1,
  });

  // initial deploy
  console.log("\ndeploy ProxyUpgradeTest");
  await deploy("ProxyUpgradeTest", {
    from: deployer,
    log: true,
    contract: "ProxyUpgradeTest_V1",
    proxy: {
      proxyContract:
        "@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol:TransparentUpgradeableProxy",
      viaAdminContract: {
        name: "ProxyAdmin",
      },
      execute: {
        methodName: "initialize",
        args: [],
      },
    },
    waitConfirmations: 1,
  });
  console.log("version", await read("ProxyUpgradeTest", "getVersion"));

  // upgrade proxy
  await deploy("ProxyUpgradeTest", {
    from: deployer,
    log: true,
    contract: "ProxyUpgradeTest_V2",
    proxy: {
      proxyContract:
        "@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol:TransparentUpgradeableProxy",
      viaAdminContract: {
        name: "ProxyAdmin",
      },
    },
    waitConfirmations: 1,
  });
  console.log("version", await read("ProxyUpgradeTest", "getVersion"));
};
export default func;
func.tags = ["ProxyUpgradeTest"];
