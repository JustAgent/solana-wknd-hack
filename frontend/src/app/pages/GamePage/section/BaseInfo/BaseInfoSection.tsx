import React from 'react'
import { useParams } from 'react-router-dom'

import { styled } from '../../../../../styles'
import { textVariant } from '../../../../UIkit'
import { type Params } from '../../../../utils/router'
import { useActivatedStore } from '../../../../utils/store/activate-deactivate/useActivatedStore.ts'
import { GridBlock } from '../../helper/styles/style.ts'

const GameName = styled('h1', {
  ...textVariant('h3').true,
  fontWeight: '600',
  color: '$gray800',
  marginBottom: '$3',
})

export const NftLicence = styled('span', {
  display: 'flex',
  gap: '4px',
})

const BaseInfoSection = () => {
  const { gameId } = useParams<Params>()

  const { gameStore } = useActivatedStore('gameStore')

  return (
    <GridBlock>
      <GameName>{gameStore.data?.name}</GameName>
    </GridBlock>
  )
}

export default BaseInfoSection
