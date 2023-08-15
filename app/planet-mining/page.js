'use client'

import Image from "next/image"
import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import { useAddress } from "@thirdweb-dev/react"
import { useEffect } from "react"

const diff = 5

let plusWorker = null

const MiningPage = () => {
  const address = useAddress()

  // create modal that show calculation and stop button
  useEffect(() => {
    // return () => {
    //   plusWorker && plusWorker.terminate()
    // }
  }, [])

  const startMining = () => {
    if (plusWorker) {
      return
    }

    plusWorker = new Worker(new URL('../../workers/miner', import.meta.url))

    plusWorker.onmessage = (event) => {
      const [digest, nonce] = event.data
      const solution = parseInt(digest.substring(2, 2 + diff), 16)
      if (solution != 0) {
        setTimeout(() => {
          mining()
        }, 0)
      }
      else {
        alert(`found new block, challenge: ${123} | nonce: ${nonce}`)
        stopMining()
      }
    }

    mining()
  }

  const stopMining = () => {
    if (plusWorker) {
      plusWorker.terminate()
      plusWorker = null
    }
  }

  const mining = () => {
    // const digest = miner(123, address)
    plusWorker.postMessage([123, address])
  }

  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto absolute z-10 left-0 right-0">
        <Nav />
      </div>
      <div className="absolute -z-10 w-full bg-cover bg-center h-[50vh] image-rendering" style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.20) 8.85%, rgba(0, 0, 0, 0.20) 82.81%, #000 100%), url(/planet-mining.jpg)`
      }}></div>
      <div className="max-w-6xl mx-auto p-4 pt-[50vh] relative">
        <div className="flex justify-between text-center">
          <p className="max-w-4xl text-lg">Mining Difficulty</p>
          <p className="max-w-4xl text-lg">Current Challenge</p>
          <p className="max-w-4xl text-lg">Planet Minted</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex -mx-4">
          <div className="px-4">
            <button className="bg-white text-black px-4 py-2 font-bold text-lg" onClick={() => startMining()}>Start Mining</button>
          </div>
          <div className="px-4">
            <button className="bg-white text-black px-4 py-2 font-bold text-lg" onClick={() => stopMining()}>Stop Mining</button>
          </div>
          <div className="px-4">
            <button className="bg-white text-black px-4 py-2 font-bold text-lg">Upgrade Mining</button>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-4 my-32">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-3/5 order-2 md:order-1">
            <p className="text-3xl font-bold mt-8">MINING</p>
            <p className="mt-4">Planet Mining is based on ERC-918: Mineable Token Standard that uses Proof of Work algorithm in order to control the distribution rate of $RTS via Planet NFT</p>
            <p className="mt-2">Planet is minted as NFT and tradable on any NFT marketplace, each planet is unique and randomly generated on-chain with various resources available for players to gather</p>
            <div className="flex mt-16 -mx-4">
              <button className="bg-white text-black px-4 py-2 font-bold text-lg mx-4">Planet Mining</button>
              <button className="bg-white text-black px-4 py-2 font-bold text-lg mx-4 bg-opacity-50 cursor-not-allowed">Rates Expedition (SOON)</button>
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
            <p className="mt-4">From resource extraction to cutting-edge processing centers, your planet can be the hub of universe. Shape policies including taxes and visa regulations. Embrace the challenge of balancing resources and strategy while unleashing the potential of your planet to soar among the stars.</p>
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
      <Footer />
    </main>
  )
}

export default MiningPage