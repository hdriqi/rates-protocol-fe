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
      <Wallet />
      <html lang="en">
        <body className={inconsolata.className}>{children}</body>
      </html>
    </Web3Provider>
  )
}
