'use client'

import {
  ConnectWallet
} from "@thirdweb-dev/react"
import Link from "next/link"
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from "react"

export default function Nav() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

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
          <Link href="/explore" className="text-2xl px-4">Explore</Link>
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
          <div className={`fixed z-10 bottom-[84px] left-0 right-0 flex items-center bg-black bg-opacity-90 transition-all ${!showMobileMenu && `translate-y-[99%]`}`}>
            <div className={`flex flex-col w-full text-center border-t border-gray-800`}>
              <Link href="/" className="text-2xl p-4">Home</Link>
              <Link href="/explore" className="text-2xl p-4">Explore</Link>
              <Link href="/planet-mining" className="text-2xl p-4">Mining</Link>
            </div>
          </div>
          <div className={`fixed z-20 left-0 right-0 bottom-0 h-[84px] bg-black bg-opacity-90`}>
            <div className="flex justify-between items-center p-4 relative z-30">
              <div>
                <img className="w-11" src="/favicon.svg" />
              </div>
              <div>
                <ConnectWallet />
              </div>
              <div>
                <Hamburger onToggle={() => setShowMobileMenu(!showMobileMenu)} className="relative z-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}