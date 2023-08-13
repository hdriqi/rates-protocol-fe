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
      <div className="relative mx-auto h-[140px] w-[360px] rounded-lg bg-white p-6 text-black">
        <div className="mt-3 flex items-center pb-3 text-sm font-semibold">
          Wrong Network
        </div>
        <button onClick={() => switchChain(Base.chainId)}>
          Switch to Base
        </button>
      </div>
    </Modal>
  )
}