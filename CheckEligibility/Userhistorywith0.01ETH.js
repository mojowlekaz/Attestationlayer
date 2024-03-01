const { ethers } = require('ethers')
const axios = require('axios')

async function hasSufficientEthTransaction(address) {
  try {
    const etherscanApiKey = '3FCW2HXWNTSZA9T8B7QD5AFSDP1BZQTX39'
    const etherscanUrl = `https://api.basescan.org/api?module=account&action=txlist&address=${address}&apikey=${etherscanApiKey}`

    const response = await axios.get(etherscanUrl)

    if (response.data.status === '1') {
      const history = response.data.result

      if (history.length > 0) {
        console.log(`Transaction history for address: ${address}`)

        for (let i = 0; i < history.length; i++) {
          const tx = history[i]

          // Convert Wei to Ether
          const valueInEther = ethers.utils.formatUnits(tx.value, 'ether')

          // Check if the transaction value is greater than or equal to 1.975081874494107 Ether
          if (parseFloat(valueInEther) >= 0.01) {
            console.log(`Tx Hash: ${tx.hash}`)
            console.log(`Block Number: ${tx.blockNumber}`)
            console.log(
              `Timestamp: ${new Date(tx.timeStamp * 1000).toISOString()}`,
            )
            console.log(`From: ${tx.from}`)
            console.log(`To: ${tx.to}`)
            console.log(`Value (ETH): ${valueInEther}`)
            console.log('--------------------')

            // If a qualifying transaction is found, return true
            return true
          }
        }
      } else {
        console.log(`No transaction history found for address: ${address}`)
      }
    } else {
      console.error('Etherscan API error:', response.data.message)
    }

    // If no qualifying transaction is found, return false
    return false
  } catch (error) {
    console.error('Error:', error)

    // If an error occurs, return false
    return false
  }
}

const userAddress = '0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326'

// Define an async function to use await
const checkSufficientEth = async () => {
  // Wait for the result of the asynchronous function
  const hasSufficientEth = await hasSufficientEthTransaction(userAddress)
  console.log('Has Sufficient ETH:', hasSufficientEth)
}

checkSufficientEth()
