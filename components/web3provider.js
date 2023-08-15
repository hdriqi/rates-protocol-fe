'use client'

import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
} from "@thirdweb-dev/react"
import { Base } from "@thirdweb-dev/chains"

export default function Web3Provider({ children }) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_THIRD_WEB_CLIENT_ID}
      activeChain={Base}
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