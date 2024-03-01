const axios = require('axios')

export const apiKey: string = '25IMIBYESBYM259WHN6B9W3M7NUCD4IQMW'

export const page: number = 1
export const offset: number = 100
export const startBlock: number = 0
export const endBlock: number = 999999999
const contractAddress = '0x2B09d47D550061f995A3b5C6F0Fd58005215D7c8'

async function getNFTTransactions(accountAddress: string) {
  const nftTxApiEndpoint = `https://api.bscscan.com/api?module=account&action=tokennfttx&contractaddress=${contractAddress}&address=${accountAddress}&page=${page}&offset=${offset}&startblock=${startBlock}&endblock=${endBlock}&sort=asc&apikey=${apiKey}`
  try {
    const response = await axios.get(nftTxApiEndpoint)
    if (response.data.status === '1') {
      const nftTransactions = response.data.result
      if (nftTransactions.length > 0) {
        return true
      }
    } else {
      console.error('Error getting NFT transactions:', response.data)
      return null
    }
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export async function printBABTNFTTransactions(A: string) {
  const nftTransactions = await getNFTTransactions(A)
  if (nftTransactions == true) {
    return { status: 'success', message: 'BABT NFT found' }
  } else {
    return { status: 'fail', message: 'No BABT NFT found' }
  }
}

// printNFTTransactions('0x141dA4032b67aADaDa63047017aDCaCa4c0d6987')
