import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from '@solana/web3.js'
import { type FC, type PropsWithChildren, useMemo } from 'react'

const useWalletConfig = () => {
  const solNetwork = WalletAdapterNetwork.Devnet
  const endpoint = useMemo(() => clusterApiUrl(solNetwork), [solNetwork])
  // initialise all the wallets you want to use
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter({ network: solNetwork }),
      new TorusWalletAdapter(),
      new LedgerWalletAdapter(),
    ],
    [solNetwork],
  )

  return {
    endpoint,
    wallets,
  }
}

export const WalletConnectProvider: FC<PropsWithChildren> = ({ children }) => {
  const { endpoint, wallets } = useWalletConfig()

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>
          { children }
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
