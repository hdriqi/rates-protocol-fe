'use client'

import {
  ConnectWallet
} from "@thirdweb-dev/react"
import Link from "next/link"

export default function Nav() {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="w-2/3"><p className="text-3xl">Rates Protocol</p></div>
      <div className="w-1/3 flex justify-between items-center">
        <Link href="/planet-mining" className="text-2xl">Explore</Link>
        <Link href="/planet-mining" className="text-2xl">Mining</Link>
        <ConnectWallet />
      </div>
    </div>
  )
}