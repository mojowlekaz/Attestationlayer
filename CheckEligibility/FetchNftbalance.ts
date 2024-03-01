const axios = require('axios')

export const apiKey: string = '3FCW2HXWNTSZA9T8B7QD5AFSDP1BZQTX39'

export const page: number = 1
export const offset: number = 100
export const startBlock: number = 0
export const endBlock: number = 999999999
// const contractAddress = '0x2B09d47D550061f995A3b5C6F0Fd58005215D7c8'

async function getNormalTransactions(address: string) {
  const normalTxApiEndpoint = `https://api.basescan.org/api?module=account&action=txlist&address=${address}&startblock=${startBlock}&endblock=${endBlock}&page=${page}&offset=${offset}&sort=asc&apikey=${apiKey}`

  try {
    const response = await axios.get(normalTxApiEndpoint)
    if (response.data.status === '1') {
      const normalTransactions = response.data.result
      if (normalTransactions.length > 5) {
        return normalTransactions
      }
    } else {
      console.error('Error getting normal transactions:', response.data)
      return null
    }
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

async function printNormalTransactions(address: string) {
  const normalTransactions = await getNormalTransactions(address)
  if (normalTransactions !== null) {
    console.log('Normal transactions:', normalTransactions)
  } else {
    console.log('No normal transactions found for the account.')
  }
}

printNormalTransactions('0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC')
