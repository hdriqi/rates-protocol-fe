import Wallet from "../components/Wallet"
import Web3Provider from "../components/web3provider"
import './globals.css'
import { Inconsolata } from 'next/font/google'

const inconsolata = Inconsolata({ subsets: ['latin'] })

export const metadata = {
  title: 'Rates Protocol',
  description: 'On-chain game build on Base L2',
}

export default function RootLayout({ children }) {
  return (
    <Web3Provider>
      <html lang="en">
        <link rel="icon" href="/favicon.svg" sizes="any" />

        <body className={inconsolata.className}>
          <Wallet />
          {children}
        </body>
      </html>
    </Web3Provider>
  )
}
