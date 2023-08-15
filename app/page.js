import Link from "next/link"
import Footer from "../components/Footer"
import Nav from "../components/Nav"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto absolute left-0 right-0">
        <Nav />
      </div>
      <div className="absolute -z-10 w-full bg-cover bg-center h-[50vh] image-rendering" style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.20) 8.85%, rgba(0, 0, 0, 0.20) 82.81%, #000 100%), url(/hero.jpg)`
      }}></div>
      <div className="max-w-6xl mx-auto p-4 pt-[50vh]">
        <p className="max-w-4xl text-lg">
          Humanity has discovered a revolutionary material capable of doing Room-Temperature Superconductor ($RTS), also referred to as <b>Rates</b>.

          Explore new planets, extract resources, and elevate in a new age of technological marvels.

          Your journey begins now!</p>
      </div>
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl">Explore Planet</p>
          </div>
          <div>
            <Link href="/explore" className="opacity-60 hover:opacity-100 text-xl font-semibold">
              MORE
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 mt-4">
          {[1, 2, 3, 4].map((v) => {
            return (
              <div className="w-1/2 md:w-1/2 lg:w-1/4 p-4 " key={v}>
                <img className="border-2 border-gray-800 w-full" alt={`planet #${v}`} src={`http://localhost:8000/${v}`} />
              </div>
            )
          })}
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-4 my-32">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-3/5">
            <p className="text-3xl font-bold">⯄ Rates ($RTS)</p>
            <p className="mt-8">Uncover more than resources – uncover new worlds! Through the art of planet mining, you can excavate the mysteries of uncharted territories, revealing planets that hold the elusive Room-Temperature Superconductor, Rates.</p>
            <p className="mt-2">Planet Mining is based on ERC-918: Mineable Token Standard that uses Proof of Work algorithm in order to control the distribution rate of $RTS via Planet NFT</p>
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
        <p className="text-3xl font-bold">Gameplay</p>
        <p className="mt-8">Embark on an unmatched journey of exploration, innovation, and diplomacy. Your decisions will echo across the universe – will you become an industrial titan, a diplomatic genius, or a master of both? The stars await your lead.</p>
        <div className="flex flex-wrap -mx-4 mt-4">
          <div className="w-1/2 lg:w-1/4 p-4">
            <img src="/discover.svg" />
            <p className="mt-2 font-bold text-2xl">Discover</p>
            <p className="mt-2">Unearth a new planet through cutting-edge planet mining technology</p>
          </div>
          <div className="w-1/2 lg:w-1/4 p-4">
            <img src="/extract.svg" />
            <p className="mt-2 font-bold text-2xl">Extract</p>
            <p className="mt-2">Embark on expeditions in uncharted planets and extract the Rates and more</p>
          </div>
          <div className="w-1/2 lg:w-1/4 p-4">
            <img src="/refine.svg" />
            <p className="mt-2 font-bold text-2xl">Refine</p>
            <p className="mt-2">Construct advanced factories, refine resources, and shape cutting-edge technology.</p>
          </div>
          <div className="w-1/2 lg:w-1/4 p-4">
            <img src="/govern.svg" />
            <p className="mt-2 font-bold text-2xl">Govern</p>
            <p className="mt-2">Trade, set policy, and make decision that echo across the universe.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
