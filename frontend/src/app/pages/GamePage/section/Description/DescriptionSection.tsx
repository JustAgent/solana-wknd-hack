import React from 'react'

import { styled } from '../../../../../styles'
import { textVariant } from '../../../../UIkit'
import { useActivatedStore } from '../../../../utils/store/activate-deactivate/useActivatedStore.ts'
import { GridBlock, PropertyTitle } from '../../helper/styles/style.ts'

const DescriptionSectionStyle = styled(GridBlock, {
  paddingTop: '32px',
  paddingBottom: '32px',
  '@md': {
    paddingTop: '16px',
    paddingBottom: '16px',
  },
  '@sm': {
    paddingTop: '8px',
    paddingBottom: '8px',
  },
})

const Pre = styled('pre', {
  ...textVariant('body4').true,
  color: '$gray800',
  fontWeight: 400,
  whiteSpace: 'pre-wrap',
  wordWrap: 'anywhere',
  lineHeight: 1.5,
  maxWidth: 640,
})

const DescriptionSection = () => {
  const { gameStore } = useActivatedStore('gameStore')

  return (
    <>
      {gameStore.data?.description && (
        <DescriptionSectionStyle style={{ gridArea: 'Description' }}>
          <PropertyTitle>Description</PropertyTitle>
          <Pre>{gameStore.data?.description}</Pre>
        </DescriptionSectionStyle>
      )}
    </>
  )
}

export default DescriptionSection
