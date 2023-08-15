'use client'

import {
  useNetworkMismatch,
  useSwitchChain
} from "@thirdweb-dev/react"
import { Base } from "@thirdweb-dev/chains"
import Modal from "./Modal"

export default function Wallet() {
  const isMismatched = useNetworkMismatch()
  const switchChain = useSwitchChain()

  return (
    <Modal isShow={isMismatched}>
      <div className="relative mx-auto min-h-[140px] w-[360px] rounded-lg bg-gray-900 p-6">
        <div className="flex items-center pb-3">
          <p className="font-semibold text-lg">Wrong Network</p>
        </div>
        <p>Rates Protocol is on-chain game on build on BASE</p>
        <button onClick={() => switchChain(Base.chainId)} className="mt-8 bg-white w-full py-2 px-4 text-black font-bold uppercase">
          Switch to Base
        </button>
      </div>
    </Modal>
  )
}