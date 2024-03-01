const axios = require('axios')

const apiKey = '25IMIBYESBYM259WHN6B9W3M7NUCD4IQMW'
const accountAddress = '0x141dA4032b67aADaDa63047017aDCaCa4c0d6987'
const page: number = 1
const offset: number = 100
const startBlock = 0
const endBlock = 999999999
const contractAddress = '0xE84050261CB0A35982Ea0f6F3D9DFF4b8ED3C012'

export async function getNFTTransactions(accountAddress: string) {
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

// const Aee = '0x74839a2058695a5778Ac41fCb9ee5A4bc9919424'
// const Beat = '0x141dA4032b67aADaDa63047017aDCaCa4c0d6987'

export async function printNFTTransactions(A: string) {
  const nftTransactions = await getNFTTransactions(A)
  if (nftTransactions == true) {
    return { status: 'success', message: 'Galxes NFT found' }
    // console.log('NFT transactions:', nftTransactions)
  } else {
    // return { status: 'fail', message: 'NGalxes NFT found' }
    console.log('No NFT transactions found for the account.')
  }
}

// printNFTTransactions('0xF9d9a22570a77817A520574299e677E2acE4f9f2')
