require('@nomicfoundation/hardhat-toolbox')

// require("@nomiclabs/hardhat-ethers");\
async function main() {
  const [deployer] = await ethers.getSigners()

  console.log('Deploying contracts with the account:', deployer.address)

  const SignatureVerificationFactory = await ethers.getContractFactory(
    'SignatureVerification',
  )
  const SignatureVerificationDispenser =
    await SignatureVerificationFactory.deploy()
  const constructorArgument = await SignatureVerificationDispenser.getAddress()
  console.log('SignatureVerificationDispenser address:', constructorArgument)

  // ------------------------------------------
  const AttestationLayerFactory =
    await ethers.getContractFactory('AttestationLayer')

  const AttestationLayerDispenser =
    await AttestationLayerFactory.deploy(constructorArgument)

  console.log(
    'AttestationLayerDispenser address:',
    await AttestationLayerDispenser.getAddress(),
  )
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
