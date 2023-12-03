import { observer } from 'mobx-react-lite'
import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'

import { NFTDeal } from '../../../../components'
import { useOrderStore } from '../../../../hooks/useOrderStore'
import { useTransferStore } from '../../../../hooks/useTransferStore'
import { makeTokenFullId } from '../../../../processing'
import { type Params } from '../../../../utils/router'
import { GridBlock } from '../../helper/styles/style.ts'

const ControlSection = observer(() => {
  const { collectionAddress, tokenId, chainName } = useParams<Params>()
  const transferStore = useTransferStore(collectionAddress, tokenId, chainName) // watch events is called inside nft pag
  const orderStore = useOrderStore(collectionAddress, tokenId, chainName)
  const tokenFullId = useMemo(
    () => makeTokenFullId(collectionAddress, tokenId),
    [collectionAddress, tokenId],
  )

  return (
    <GridBlock>
      {tokenFullId && (
        <NFTDeal
          order={orderStore.data}
          tokenFullId={tokenFullId}
          reFetchOrder={() => {
            orderStore.reload()
            transferStore.reload()
          }}
        />

      )}
    </GridBlock>
  )
})

export default ControlSection
