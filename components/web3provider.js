'use client'

import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
} from "@thirdweb-dev/react"
import { Base, BaseGoerli } from "@thirdweb-dev/chains"

console.log(BaseGoerli)

export default function Web3Provider({ children }) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_THIRD_WEB_CLIENT_ID}
      activeChain={BaseGoerli}
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect(),
      ]}
    >
      {children}
    </ThirdwebProvider>
  )
}