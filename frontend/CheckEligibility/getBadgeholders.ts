import axios from 'axios'
export const apiKey: string = '3FCW2HXWNTSZA9T8B7QD5AFSDP1BZQTX39'

export const page: number = 1
export const offset: number = 100
export const startBlock: number = 0
export const endBlock: number = 999999999
// const contractAddress = '0x2B09d47D550061f995A3b5C6F0Fd58005215D7c8'

async function getNormalTransactions(address: string) {
  try {
    const normalTxApiEndpoint = `https://api.basescan.org/api?module=account&action=txlist&address=${address}&startblock=${startBlock}&endblock=${endBlock}&page=${page}&offset=${offset}&sort=asc&apikey=${apiKey}`

    const response = await axios.get(normalTxApiEndpoint)
    console.log('API Response:', response.data)

    if (response.data.status === '1') {
      const normalTransactions = response.data.result
      console.log('All Transactions:', normalTransactions)
      const filteredTransactions = normalTransactions.filter(
        (tx: any) => tx.to === '0x85b157ebaaf289de5301ae6694b651bf3b8df1c3',
      )

      return true
    } else {
      console.error('Error getting normal transactions:', response.data)
      return null
    }
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export async function checkforBadeges(address: string) {
  const normalTransactions = await getNormalTransactions(address)
  if (normalTransactions == true) {
    return { status: 'success', message: 'Badge NFT found' }
  } else {
    return { status: 'fail', message: 'Badge NFT not found' }
  }
}

// checkforBadeges()
