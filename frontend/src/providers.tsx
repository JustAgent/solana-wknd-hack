import { ChakraProvider } from '@chakra-ui/react'
import { NextUIProvider } from '@nextui-org/react'
import { type FC, type PropsWithChildren } from 'react'

import { DialogManager } from './app/components/DialogManager'
import { WalletConnectProvider } from './app/config/walletConnect.tsx'
import { StoreProvider } from './app/hooks/useStores.tsx'
import { StitchesProvider } from './styles'

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <WalletConnectProvider>
      <NextUIProvider disableBaseline>
        <StitchesProvider>
          <ChakraProvider>
            <StoreProvider>
              {children}
              <DialogManager />
            </StoreProvider>
          </ChakraProvider>
        </StitchesProvider>
      </NextUIProvider>
    </WalletConnectProvider>
  )
}
