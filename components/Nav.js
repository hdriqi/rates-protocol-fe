'use client'

import {
  ConnectWallet
} from "@thirdweb-dev/react"
import Link from "next/link"

export default function Nav() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center h-[3.75rem]">
        <div>
          <Link className="text-3xl" href="/">
            <img className="w-full" src="/logo.svg" />
          </Link>
        </div>
        {/* desktop nav */}
        <div className="hidden lg:flex justify-between items-center -mx-4">
          <Link href="/planet-mining" className="text-2xl px-4">Explore</Link>
          <Link href="/planet-mining" className="text-2xl px-4">Mining</Link>
          <div className="px-4">
            <div className="w-[12.5rem]">
              <ConnectWallet style={{
                width: `100%`
              }} />
            </div>
          </div>
        </div>
        {/* mobile nav */}
        <div className="flex lg:hidden justify-end">
          <p className="text-3xl">MENU</p>
        </div>
      </div>
    </div>
  )
}