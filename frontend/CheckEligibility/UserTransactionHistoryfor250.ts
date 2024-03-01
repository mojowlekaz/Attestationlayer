import axios from 'axios'
import ethers from 'ethers'

async function getUserTransactionHistory(address: string) {
  try {
    const etherscanApiKey = '3FCW2HXWNTSZA9T8B7QD5AFSDP1BZQTX39'
    const etherscanUrl = `https://api.basescan.org/api?module=account&action=txlist&address=${address}&apikey=${etherscanApiKey}`

    const response = await axios.get(etherscanUrl)

    if (response.data.status === '1') {
      const history = response.data.result

      if (history.length > 250) {
        console.log(`Transaction history for address: ${address}`)

        for (let i = 0; i < history.length; i++) {
          const tx = history[i]

          // Convert Wei to Ether
          const valueInEther = ethers.utils.formatUnits(tx.value, 'ether')

          console.log(`Tx Hash: ${tx.hash}`)
          console.log(`Block Number: ${tx.blockNumber}`)
          console.log(
            `Timestamp: ${new Date(tx.timeStamp * 1000).toISOString()}`,
          )
          console.log(`From: ${tx.from}`)
          console.log(`To: ${tx.to}`)
          console.log(`Value (ETH): ${valueInEther}`)
          console.log('--------------------')
        }
      } else {
        console.log(`No transaction history found for address: ${address}`)
      }
    } else {
      console.error('Etherscan API error:', response.data.message)
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

// Replace 'userAddress' with the Ethereum address you want to check
const userAddress = '0x4b34f943181408eac424116af7b7790c94cba8b6'

getUserTransactionHistory(userAddress)
