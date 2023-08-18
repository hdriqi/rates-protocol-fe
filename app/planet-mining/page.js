'use client'

import Image from 'next/image'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import { useAddress, useContract, useContractRead } from '@thirdweb-dev/react'
import { useEffect, useState } from 'react'
import * as ssu from 'short-scale-units'
import { BigNumber } from 'ethers'
import { truncateAddr } from '../../utils/common'
import UpgradeRigModal from '../../components/modal/UpgradeRigModal'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../../constants/common'
import { Skeleton, useDisclosure } from '@nextui-org/react'
import IconPlus from '../../components/icons/IconPlus'

let plusWorker = null

const MiningPage = () => {
  const address = useAddress()
  const { contract, isLoading } = useContract(CONTRACT_ADDRESS, CONTRACT_ABI)
  const { data: miningRigForAddress } = useContractRead(contract, 'miningRigForAddress', [address])

  const [miningDifficulty, setMiningDifficulty] = useState(0)
  const [targetDifficulty, setTargetDifficulty] = useState(0)
  const [challengeNumber, setChallengeNumber] = useState(0)
  const [planetMinted, setPlanetMinted] = useState(0)

  const [isMining, setIsMining] = useState(false)
  const [hashRate, setHashRate] = useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure()

  // stop mining when change page
  useEffect(() => {
    return () => {
      plusWorker && plusWorker.terminate()
    }
  }, [])

  useEffect(() => {
    if (isMining && plusWorker) {
      // restart plusWorker
      plusWorker.terminate()
      plusWorker = null
      startMining()
    }
  }, [isMining, challengeNumber, targetDifficulty])

  useEffect(() => {
    let unsubscribe = null

    if (!isLoading) {
      unsubscribe = contract.events.listenToAllEvents(async (event) => {
        console.log(event)
        if (event.eventName === 'ChallengeNumberChange') {
          // set new state
          console.log('update challenge number')
          setChallengeNumber(event.data.challengeNumber)
        }

        if (event.eventName === 'DifficultyChange') {
          // set new state
          console.log('update difficulty')
          const maxTargetDifficulty = await contract.call('MAXIMUM_TARGET_DIFFICULTY')
          setMiningDifficulty(maxTargetDifficulty.div(event.data.difficulty).toString())
          setTargetDifficulty(event.data.difficulty)
        }

        if (event.eventName === 'Transfer' && parseInt(event.data.from) === 0) {
          console.log('update planet minted')
          const planetId = event.data.tokenId.toString()
          setPlanetMinted(planetId)
        }
      })
    }

    return () => {
      unsubscribe && unsubscribe()
    }
  }, [isLoading])

  useEffect(() => {
    if (!isLoading) {
      getData()
    }
  }, [isLoading])

  const getData = async () => {
    const challengeNumber = await contract.call('getChallengeNumber')
    const maxTargetDifficulty = await contract.call('MAXIMUM_TARGET_DIFFICULTY')
    const currentDifficulty = await contract.call('getMiningDifficulty')
    const planetMinted = await contract.call('getPlanetMinted')

    console.log(maxTargetDifficulty.div(currentDifficulty).toString())

    setMiningDifficulty(maxTargetDifficulty.div(currentDifficulty).toString())
    setTargetDifficulty(currentDifficulty.toString())
    setChallengeNumber(challengeNumber)
    setPlanetMinted(planetMinted.toString())
  }

  const startMining = () => {
    if (!address || !contract) {
      alert('please connect wallet')
      return
    }
    plusWorker = new Worker(new URL('../../workers/miner', import.meta.url))
    setIsMining(true)

    plusWorker.onmessage = async (event) => {
      if (event.data[0] === 'solve') {
        const digest = event.data[1]
        const nonce = event.data[2]
        if (BigNumber.from(digest).lt(BigNumber.from(targetDifficulty))) {
          try {
            const result = await contract.call('mint', [nonce, digest])
            console.log(result)
          } catch (err) {
            console.log(err)
          }
        }
        else {
          setTimeout(() => {
            mining()
          }, 0)
        }
      }
      if (event.data[0] === 'counter') {
        console.log('')
        const hashGenerated = event.data[1]
        const startTime = event.data[2]
        const currentTime = new Date().getTime()
        setHashRate(hashGenerated / ((currentTime - startTime) / 1000))
      }
    }

    mining()
  }

  const mining = () => {
    plusWorker.postMessage([challengeNumber, address, targetDifficulty])
  }

  const stopMining = () => {
    setIsMining(false)
    if (plusWorker) {
      plusWorker.terminate()
      plusWorker = null
    }
  }

  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto absolute z-10 left-0 right-0">
        <Nav />
      </div>
      <div
        className="absolute w-full bg-cover bg-center h-[50vh] image-rendering"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.20) 8.85%, rgba(0, 0, 0, 0.20) 82.81%, #000 100%), url(/planet-mining.jpg)`,
        }}
      ></div>
      <div className="max-w-6xl mx-auto p-4 pt-[50vh] relative">
        <div className="max-w-2xl flex justify-between text-center">
          <div>
            <div className="flex items-center">
              <p className="font-bold uppercase  text-lg pr-2">Mining Difficulty</p>
            </div>
            <Skeleton className="bg-gray-600" isLoaded={miningDifficulty}>
              <p className=" text-lg">{`${ssu.trimNumber(miningDifficulty)} ${miningDifficulty > 10000
                ? ssu.trimName(ssu.unitNameFromNumber(miningDifficulty))
                : ''
                }`}</p>
            </Skeleton>
          </div>
          <div>
            <p className="font-bold uppercase text-lg">Current Challenge</p>
            <Skeleton className="bg-gray-600" isLoaded={challengeNumber}>
              <p className=" text-lg">{truncateAddr(challengeNumber || '0x', 6)}</p>
            </Skeleton>
          </div>
          <div>
            <p className="font-bold uppercase  text-lg">Planet Minted</p>
            <Skeleton className="bg-gray-600" isLoaded={planetMinted}>
              <p className=" text-lg">{planetMinted}</p>
            </Skeleton>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex -mx-4">
          <div className="px-4 w-60">
            {!isMining ? (
              <button className="bg-white w-full text-black px-4 py-2 font-bold text-lg" onClick={startMining}>
                Start Mining
              </button>
            ) : (
              <button className="bg-white w-full text-black px-4 py-2 font-bold text-lg" onClick={stopMining}>
                Stop Mining
              </button>
            )}
          </div>
          <div className="px-4 w-60">
            <div className="border-2 px-4 py-2 font-bold text-lg">
              Hash Rate: {hashRate.toPrecision(3)} H/s
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-4 my-32">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-3/5 order-2 md:order-1">
            <p className="text-3xl font-bold mt-8">MINING</p>
            <p className="mt-4">
              Planet Mining is based on ERC-918: Mineable Token Standard that uses Proof of Work algorithm in order to
              control the distribution rate of $RTS via Planet NFT
            </p>
            <p className="mt-2">
              Planet is minted as NFT and tradable on any NFT marketplace, each planet is unique and randomly generated
              on-chain with various resources available for players to gather
            </p>
            <p className="mt-2">Upgrade your mining machine to discover planet with better resources</p>
            <div className="flex items-center mt-16">
              <div className="border-2 border-white px-4 py-2 text-lg font-bold">⦾ Mining Machine Level: {miningRigForAddress}</div>
              <button className="border-2 border-white bg-white text-black px-4 py-2 font-bold text-lg" onClick={onOpen}>
                Upgrade +
              </button>
            </div>
          </div>
          <div className="w-full md:w-2/5 pl-0 md:pl-8 order-1 md:order-2">
            <Image alt="planet-mining-rig" className="w-full rounded-2xl" src="/rig.jpg" width="300" height="300" />
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-4 my-32">
        <div className="flex flex-wrap items-center">
          <div className="w-full">
            <p className="text-3xl font-bold">PLANET</p>
            <p className="mt-4">
              From resource extraction to cutting-edge processing centers, your planet can be the hub of universe. Shape
              policies including taxes and visa regulations. Embrace the challenge of balancing resources and strategy
              while unleashing the potential of your planet to soar among the stars.
            </p>
            <div className="-mx-4">
              <div className="flex flex-wrap">
                <div className="flex flex-shrink-0 w-full lg:w-1/2 px-4 mt-8">
                  <div className="flex items-center">
                    <div className="w-40 pr-4">
                      <img className="w-full" src="/expedition-facility.svg" />
                    </div>
                    <div className="w-3/4">
                      <p className="text-xl font-bold">Expedition Facility</p>
                      <p className="mt-2">Create expeditions to gather raw materials from your planet:</p>
                      <ul className="list-disc list-inside">
                        <li>Rates ($RTS)</li>
                        <li>Mineral-based ($MRTS)</li>
                        <li>Planet-based ($PRTS)</li>
                        <li>Animal-based ($ARTS)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex flex-shrink-0 w-full lg:w-1/2 px-4 mt-8">
                  <div className="flex items-center">
                    <div className="w-40 pr-4">
                      <img className="w-full" src="/refinement-facility.svg" />
                    </div>
                    <div className="w-3/4">
                      <p className="text-xl font-bold">Refinement Facility</p>
                      <p className="mt-2">Set up factory to process raw materials gathered from expedition into:</p>
                      <ul className="list-disc list-inside">
                        <li>Nanojuice</li>
                        <li>Modules</li>
                        <li>Orbs</li>
                        <li>Injections</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UpgradeRigModal isOpen={isOpen} onClose={onClose} />
      <Footer />
    </main>
  )
}

export default MiningPage
