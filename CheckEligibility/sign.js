const { ethers } = require('ethers')

// Replace this with your private key
const privateKey =
  '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'

async function signMessage() {
  const wallet = new ethers.Wallet(privateKey)

  const message = 'Message'

  // Sign the message
  const signedMessage = await wallet.signMessage(message)

  // Verify the message and get the signer address
  const signerAddr = ethers.utils.verifyMessage(message, signedMessage)
  console.log('signedMessage:', signedMessage)
}

// Call the async function
signMessage()
