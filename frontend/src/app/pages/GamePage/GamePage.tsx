import { Image } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import React from 'react'

import { styled } from '../../../styles'
import { PageLayout } from '../../UIkit'
import { useActivatedStore } from '../../utils/store/activate-deactivate/useActivatedStore.ts'
import BaseInfoSection from './section/BaseInfo/BaseInfoSection.tsx'
import DescriptionSection from './section/Description/DescriptionSection.tsx'
import HomeLandSection from './section/HomeLand/HomeLandSection.tsx'

const CenterContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  gap: '$3',
  flexDirection: 'column',
  position: 'relative',
})

const ImageStyle = styled(Image, {
  width: 'max-content',
  maxWidth: '1100px',
  height: 'max-content',
  maxHeight: '500px',
  borderRadius: '20px',
  marginTop: '-50px',
  '@lg': {
    maxWidth: '812px',
  },
  '@md': {
    maxWidth: '540px',
  },
  '@sm': {
    maxWidth: 358,
    maxHeight: 358,
    marginBottom: '73px',
    marginTop: 0,
  },
})

const GamePreviewContainer = styled('div', {
  width: '100%',
  height: 686,
  background: '$gradients$background',
  boxSizing: 'content-box',
  zIndex: 1,
  position: 'relative',
  overflow: 'hidden',
  '@sm': {
    marginTop: '83px',
    height: 455,
  },
})

const MainInfo = styled(PageLayout, {
  display: 'flex', // чтобы можно было дочерним заполнить все пространство
  marginTop: '74px',
  marginBottom: '-80px',
  paddingTB: 48,
  fontSize: '16px',
  gridTemplateColumns: '3fr 1fr',
  columnGap: '$4',
  minHeight: '100%',
  height: 'max-content',
  borderRadius: '12px 12px 0 0',
  top: 'calc(-$6 - 90px)',
  boxShadow: '$footer',
  zIndex: '7',
  position: 'relative',
  '@md': {
    height: 'unset',
  },
})

const GridLayout = styled('div', {
  flexGrow: 1, // чтобы был в высоту родителя
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '32px',
  position: 'relative',
  columnGap: '$4',
})

const GamePage: React.FC = observer(() => {
  const { gameStore } = useActivatedStore('gameStore')

  return (
    <>
      <GamePreviewContainer>
        <CenterContainer>
          <ImageStyle
            src={gameStore.data?.image_url}
            borderRadius='lg'
          />
        </CenterContainer>
      </GamePreviewContainer>
      <MainInfo>
        <GridLayout>
          <BaseInfoSection />
          <HomeLandSection />
          <DescriptionSection />
        </GridLayout>
      </MainInfo>
    </>
  )
})

export default GamePage
