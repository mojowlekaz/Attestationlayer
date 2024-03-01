'use client'
import React, { useEffect, useState } from 'react'
import { calculategrade } from '../Math/Calculategrade'
import { printNFTTransactions } from '/Users/macbook/onchainlayer/CheckEligibility/FetchGalxeNfts'
import { printBABTNFTTransactions } from '/Users/macbook/onchainlayer/CheckEligibility/FetchBABTNfts.ts'
import { getbal } from '/Users/macbook/onchainlayer/CheckEligibility/getEthbalance.js'
import { checkforBadeges } from '/Users/macbook/onchainlayer/CheckEligibility/getBadgeholders.ts'

export default function Userportfolio() {
  const [score, setScore] = useState<number>(52)
  const [rating, setRating] = useState<string>('')
  const [loyaltypoint, setLoyalityPoint] = useState<number>(1522)
  const [Galxepoint, setGalxePoint] = useState<number>(0)
  const [babtpoint, setBABTPoint] = useState<number>(0)
  const [gitpoint, setGITPoint] = useState<number>(0)
  const [ethscore, setEthScore] = useState<number>(0)
  const [badgeholders, setBadgeholders] = useState<number>(0)
  const [nomisscore, setNomisScore] = useState<number>(0)
  const [aAdopter, setaAdopter] = useState<number>(1)

  const accountAddress = '0xA838eb532E5A98Bd55dD44a2eec0fD2094Ac7023'

  useEffect(() => {
    const result = calculategrade(
      Galxepoint +
        babtpoint +
        gitpoint +
        ethscore +
        aAdopter +
        nomisscore +
        badgeholders,
    )
    setRating(result)

    fetchData()
  }, [
    score,
    Galxepoint,
    aAdopter,
    babtpoint,
    badgeholders,
    ethscore,
    nomisscore,
    gitpoint,
  ])

  const fetchData = async () => {
    const GalxeNft = await printNFTTransactions(accountAddress)
    if (GalxeNft?.status === 'success') {
      setGalxePoint(10)
      console.log(GalxeNft.message)
    } else {
      console.log('An error occurred.')
    }
    const BABTNfs = await printBABTNFTTransactions(accountAddress)
    if (BABTNfs?.status === 'success') {
      setGalxePoint(10)
      console.log(BABTNfs.message)
    } else {
      console.log('An error occurred.')
    }

    const getEthbalance = await getbal(accountAddress)
    if (getEthbalance?.status === 'success') {
      setEthScore(5)
      console.log(getEthbalance.message)
    } else {
      console.log('An error occurred.')
    }

    const getbadgebalance = await checkforBadeges(accountAddress)
    if (getbadgebalance?.status === 'success') {
      setBadgeholders(5)
      console.log(getbadgebalance.message)
    } else {
      console.log('An error occurred.')
    }
  }

  return (
    <div>
      <div className="h-full flex flex-col rounded-[10px] w-[900px] userAccount px-5 py-5">
        <p className="text-white font-normal text-[20px] leading-[24.2px] ">
          Your score
        </p>
        <br />
        <div className="w-full h-[177px] Uboder flex justify-around items-center rounded-[20px] bg-black">
          <div className="flex flex-col items-center gap-5">
            <p className="text-white font-normal text-[20px] leading-[24.2px] ">
              layer Score
            </p>
            <p className="text-white font-normal text-[40px] leading-[15.73px] ">
              {score}
            </p>
          </div>

          <div className="h-full w-[1px] bg-12f1e4"></div>

          <div className="flex flex-col items-center gap-5">
            <p className="text-white font-normal text-[20px] leading-[24.2px] ">
              layer Score
            </p>
            <p className="text-white font-normal text-[40px] leading-[15.73px] ">
              {rating}
            </p>
          </div>
          <div className="h-full w-[1px] bg-12f1e4"></div>
          <div className="flex flex-col items-center gap-5">
            <p className="text-white font-normal text-[20px] leading-[24.2px] ">
              layer Score
            </p>
            <p className="text-white font-normal text-[40px] leading-[15.73px] ">
              {loyaltypoint}
            </p>
          </div>
        </div>
        <br />
        <div className="Uboder h-full  rounded-[20px] justify-center  flex flex-col gap-2">
          <div className="Uboder h-[50px] justify-between px-5 items-center flex rounded-[20px]">
            <p className="text-white font-normal text-[20px] leading-[24.2px] ">
              Gitcoin Passport
            </p>
            <p className="text-white font-normal text-[20px] leading-[24.2px] ">
              {gitpoint}
            </p>
          </div>

          <div className="Uboder h-[50px] justify-between px-5 items-center flex rounded-[20px]">
            <p className="text-white font-normal text-[20px] leading-[24.2px] ">
              Nomis Total Score
            </p>
            <p className="text-white font-normal text-[20px] leading-[24.2px] ">
              {nomisscore}
            </p>
          </div>
          <div className="Uboder h-[50px] justify-between px-5 items-center flex rounded-[20px]">
            <p className="text-white font-normal text-[20px] leading-[24.2px] ">
              Binance BABT
            </p>
            <p className="text-white font-normal text-[20px] leading-[24.2px] ">
              {babtpoint ? babtpoint : '---'}
            </p>
          </div>
          <div className="Uboder h-[50px] justify-between px-5 items-center flex rounded-[20px]">
            <p className="text-white font-normal text-[20px] leading-[24.2px] ">
              Galxe Passport
            </p>
            <p className="text-white font-normal text-[20px] leading-[24.2px] ">
              {Galxepoint ? babtpoint : '---'}
            </p>
          </div>

          <div className="Uboder h-[50px] justify-between px-5 items-center flex rounded-[20px]">
            <p className="text-white font-normal text-[20px] leading-[24.2px] ">
              Badge holders
            </p>
            <p className="text-white font-normal text-[20px] leading-[24.2px] ">
              {badgeholders ? badgeholders : '---'}
            </p>
          </div>
          <div className="Uboder h-[50px] justify-between px-5 items-center flex rounded-[20px]">
            <p className="text-white font-normal text-[20px] leading-[24.2px] ">
              Maintain 0.05ETH Mainnet Balance
            </p>
            <p className="text-white font-normal text-[20px] leading-[24.2px] ">
              {ethscore}
            </p>
          </div>
          <div className="Uboder h-[50px] justify-between px-5 items-center flex rounded-[20px]">
            <p className="text-white font-normal text-[20px] leading-[24.2px] ">
              A-Layer Early Adopter Holder
            </p>
            <p className="text-white font-normal text-[20px] leading-[24.2px] ">
              {aAdopter}
            </p>
          </div>
        </div>
        <br />
        <div className="Uboder rounded-[20px] w-full h-full flex  flex-col gap-2 p-10">
          <p className="text-white font-normal text-[20px] leading-[24.2px] ">
            Refferal
          </p>
          <div className="bg-black w-full h-[70px] Uboder flex  justify-center items-center rounded-[13px] text-center ">
            <p className="text-white font-normal text-[20px] leading-[24.2px] ">
              Soon!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
