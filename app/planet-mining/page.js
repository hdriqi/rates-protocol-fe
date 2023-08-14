import Footer from "../../components/Footer"
import Nav from "../../components/Nav"

const MiningPage = () => {
  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto absolute z-10 inset-0">
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
            <button className="bg-white text-black px-4 py-2 font-bold text-lg">Start Mining</button>
          </div>
          <div className="px-4">
            <button className="bg-white text-black px-4 py-2 font-bold text-lg">Upgrade Mining</button>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-4 my-32">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-3/5">
            <p className="text-3xl font-bold">MINING</p>
            <p className="mt-8">Planet Mining is based on ERC-918: Mineable Token Standard that uses Proof of Work algorithm in order to control the distribution rate of $RTS via Planet NFT</p>
            <p className="mt-2">Planet is minted as NFT and tradable on any NFT marketplace, each planet is unique and randomly generated on-chain with various resources available for players to gather</p>
            <div className="flex mt-16 -mx-4">
              <button className="bg-white text-black px-4 py-2 font-bold text-lg mx-4">Planet Mining</button>
              <button className="bg-white text-black px-4 py-2 font-bold text-lg mx-4 bg-opacity-50 cursor-not-allowed">Rates Expedition (SOON)</button>
            </div>
          </div>
          <div className="w-full md:w-2/5 p-12">
            <img src="/rates.svg" />
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-4 my-32">
        <div className="flex flex-wrap items-center">
          <div className="w-full">
            <p className="text-3xl font-bold">PLANET</p>
            <p className="mt-8">From resource extraction to cutting-edge processing centers, your planet can be the hub of universe. Shape policies including taxes and visa regulations. Embrace the challenge of balancing resources and strategy while unleashing the potential of your planet to soar among the stars.</p>
            {/* desktop */}
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