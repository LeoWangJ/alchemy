import { ethers } from "hardhat";
require("dotenv").config({ path: ".env" });
import { FEE, VRF_COORDINATOR, LINK_TOKEN, KEY_HASH } from '../constants'

async function main() {
  const randomWinnerGame = await ethers.getContractFactory('RandomWinnerGame');
  const deployedRandomWinnerGameContract = await randomWinnerGame.deploy(
    VRF_COORDINATOR,
    LINK_TOKEN,
    KEY_HASH,
    FEE
  )

  await deployedRandomWinnerGameContract.deployed()

  console.log("Verify Contract Address:", deployedRandomWinnerGameContract.address);
  // Wait for etherscan to notice that the contract has been deployed
  // await sleep(30000);

  // // Verify the contract after deploying
  // await hre.run("verify:verify", {
  //   address: deployedRandomWinnerGameContract.address,
  //   constructorArguments: [VRF_COORDINATOR, LINK_TOKEN, KEY_HASH, FEE],
  // });
}


function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
