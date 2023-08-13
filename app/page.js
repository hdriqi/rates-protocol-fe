import Nav from "../components/Nav"
import Wallet from "../components/wallet"
import Web3Provider from "../components/web3provider"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Web3Provider>
        <Wallet />
        <div className="max-w-6xl mx-auto">
          <Nav />
        </div>
        <div className="mt-32 max-w-6xl mx-auto p-4">
          <p className="max-w-4xl text-lg">
            Humanity has discovered a revolutionary material capable of doing Room-Temperature Superconductor ($RTS), also referred to as Rates.

            Venture to a newfound planet, collect extraordinary resources, and usher in a new age of technological marvels.

            Your journey begins now!</p>
        </div>
        <div className="max-w-6xl mx-auto p-4">
          <p className="text-3xl">Explore Planet</p>
          <div className="flex -mx-4 mt-4">
            {[1, 2, 3, 4].map((v) => {
              return (
                <div className="px-4" key={v}>
                  <img alt={`planet #${v}`} src={`http://localhost:8000/${v}`} />
                </div>
              )
            })}
          </div>
        </div>
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex items-center">
            <div className="w-4/5">
              <p className="text-3xl font-bold">Rates ($RTS)</p>
              <p className="mt-8">Uncover more than resources – uncover new worlds! Through the art of planet mining, you'll excavate the mysteries of uncharted territories, revealing planets that hold the elusive Room-Temperature Superconductor, Rates.</p>
              <p className="mt-2">Planet Mining is based on ERC-918: Mineable Token Standard that uses Proof of Work algorithm in order to control the distribution rate of $RTS via Planet NFT</p>
            </div>
            <div className="w-1/5 p-4">
              <svg width="100%" height="100%" viewBox="0 0 346 471" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M241.5 56L332 212.75H151L241.5 56Z" fill="url(#paint0_linear_42_16)" />
                <path d="M241.5 369.5L151 212.75H332L241.5 369.5Z" fill="url(#paint1_linear_42_16)" />
                <path d="M136.5 0L227 156.75H46.0003L136.5 0Z" fill="url(#paint2_linear_42_16)" />
                <path d="M136.5 313.5L46.0003 156.75H227L136.5 313.5Z" fill="url(#paint3_linear_42_16)" />
                <path d="M107 149.5L199.665 310H14.3353L107 149.5Z" fill="url(#paint4_linear_42_16)" />
                <path d="M107 470.5L14.3353 310H199.665L107 470.5Z" fill="url(#paint5_linear_42_16)" />
                <defs>
                  <linearGradient id="paint0_linear_42_16" x1="241.5" y1="56" x2="241.5" y2="265" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#D9D9D9" />
                    <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_42_16" x1="241.5" y1="369.5" x2="241.5" y2="160.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#D9D9D9" />
                    <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint2_linear_42_16" x1="136.5" y1="0" x2="136.5" y2="209" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#D9D9D9" />
                    <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint3_linear_42_16" x1="136.5" y1="313.5" x2="136.5" y2="104.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#D9D9D9" />
                    <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint4_linear_42_16" x1="107" y1="149.5" x2="107" y2="363.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#D9D9D9" />
                    <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint5_linear_42_16" x1="107" y1="470.5" x2="107" y2="256.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#D9D9D9" />
                    <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>

            </div>
          </div>
        </div>
      </Web3Provider>
    </main>
  )
}
