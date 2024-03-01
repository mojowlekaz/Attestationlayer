import axios from 'axios'
const ethers = require('ethers')

const userAddress = '0x7fbcb044900e660bc12477a2c8ec55eca358f976'
const etherscanApiKey = '3FCW2HXWNTSZA9T8B7QD5AFSDP1BZQTX39'

async function checkTotalGasFees() {
  try {
    const etherscanUrl = `https://api.basescan.org/api?module=account&action=txlist&address=${userAddress}&apikey=${etherscanApiKey}`

    const response = await axios.get(etherscanUrl)

    if (response.data.status === '1') {
      const transactions = response.data.result

      // Sum up the gas fees from all transactions
      const totalGasFees = transactions.reduce((total: any, tx: any) => {
        const gasUsed: any = ethers.BigNumber.from(tx.gasUsed)
        const gasPrice: any = ethers.BigNumber.from(tx.gasPrice)
        const transactionFee: any = gasUsed.mul(gasPrice)

        return total.add(transactionFee)
      }, ethers.BigNumber.from(0))

      // Convert total gas fees from Wei to Ether
      const totalGasFeeinETH = ethers.utils.formatEther(totalGasFees)

      // Check if total gas fees are greater than or equal to 0.02 Ether
      return totalGasFeeinETH >= 0.02
    } else {
      console.error('Etherscan API error:', response.data.message)
      // If there's an error, you might want to return false or handle it accordingly
      return false
    }
  } catch (error) {
    console.error('Error:', error)
    return false
  }
}

async function main() {
  const result = await checkTotalGasFees()
  console.log(result)
}

main()
