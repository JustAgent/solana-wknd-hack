import { observer } from 'mobx-react-lite'
import { type FC } from 'react'
import {WalletMultiButton} from "@solana/wallet-adapter-react-ui";


export const AppConnectWidget: FC = observer(() => {

    return <>
        <WalletMultiButton />
    </>
})
