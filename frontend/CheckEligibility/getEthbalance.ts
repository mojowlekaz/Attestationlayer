import axios from 'axios'

const apiKey = '3FCW2HXWNTSZA9T8B7QD5AFSDP1BZQTX39'

async function getEthBalance(address: string) {
  const etherscanUrl = `https://api.basescan.org/api?module=account&action=balance&address=${address}&tag=latest&apikey=${apiKey}`

  try {
    const response = await axios.get(etherscanUrl)

    if (response.data.status === '1') {
      const balanceWei = response.data.result
      const balanceEth: any = balanceWei / 1e18 // Convert from Wei to ETH
      return balanceEth
    } else {
      console.error('Basescan API error:', response.data.message)
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

export async function getbal(address: string) {
  const ethbal: any = await getEthBalance(address)
  if (ethbal > 0.05) {
    return { status: 'success', message: 'Sufficient balance' }
  } else {
    return { status: 'fail', message: 'Insufficient balance' }
  }
}

// getbal('0xF9d9a22570a77817A520574299e677E2acE4f9f2')
