import { GameStatusEnum } from '../../../api/Api.ts'
import { styled } from '../../../styles'
import { GameCard, type GameCardProps } from '../../components/Game/Card/GameCard.tsx'
import { Button, PageLayout } from '../../UIkit'
import { Title } from '../../UIkit/PageLayout/Title/Title.tsx'
import { useTestFlip } from '../../web3/test/useTestFlip.ts'

const explorePageData: GameCardProps[] = [
  {
    gamePhoto: 'https://bit.ly/sage-adebayo',
    name: 'Bananchiki',
    statusGame: GameStatusEnum.ACCEPTED,
    creator: {
      avatarUrl: 'https://bit.ly/sage-adebayo',
      name: 'Vatset Maria',
    },
  },
  {
    gamePhoto: 'https://bit.ly/sage-adebayo',
    name: 'Bananchiki',
    statusGame: GameStatusEnum.CANCEL,
    creator: {
      avatarUrl: 'https://bit.ly/sage-adebayo',
      name: 'Levin Aleksey',
    },
  },
  {
    gamePhoto: 'https://bit.ly/sage-adebayo',
    name: 'Bananchiki',
    statusGame: GameStatusEnum.CREATED,
    creator: {
      avatarUrl: 'https://bit.ly/sage-adebayo',
      name: 'Baykov Ivan',
    },
  },
  {
    gamePhoto: 'https://bit.ly/sage-adebayo',
    name: 'Bananchiki',
    statusGame: GameStatusEnum.DENIED,
    creator: {
      avatarUrl: 'https://bit.ly/sage-adebayo',
      name: 'Trofimov Andrey',
    },
  },
  {
    gamePhoto: 'https://bit.ly/sage-adebayo',
    name: 'Bananchiki',
    statusGame: GameStatusEnum.REQUEST,
    creator: {
      avatarUrl: 'https://bit.ly/sage-adebayo',
      name: 'Trofimov Andrey',
    },
  },
  {
    gamePhoto: 'https://bit.ly/sage-adebayo',
    name: 'Bananchiki',
    statusGame: GameStatusEnum.REFACTOR,
    creator: {
      avatarUrl: 'https://bit.ly/sage-adebayo',
      name: 'Trofimov Andrey',
    },
  },
  {
    gamePhoto: 'https://bit.ly/sage-adebayo',
    name: 'Bananchiki',
    statusGame: GameStatusEnum.ACCEPTED,
    creator: {
      avatarUrl: 'https://bit.ly/sage-adebayo',
      name: 'Trofimov Andrey',
    },
  },
  {
    gamePhoto: 'https://bit.ly/sage-adebayo',
    name: 'Bananchiki',
    statusGame: GameStatusEnum.VOTING,
    creator: {
      avatarUrl: 'https://bit.ly/sage-adebayo',
      name: 'Trofimov Andrey',
    },
  },
  {
    gamePhoto: 'https://bit.ly/sage-adebayo',
    name: 'Bananchiki',
    statusGame: GameStatusEnum.VALIDATING,
    creator: {
      avatarUrl: 'https://bit.ly/sage-adebayo',
      name: 'Trofimov Andrey',
    },
  },
  {
    gamePhoto: 'https://bit.ly/sage-adebayo',
    name: 'Bananchiki',
    statusGame: GameStatusEnum.VALIDATION,
    creator: {
      avatarUrl: 'https://bit.ly/sage-adebayo',
      name: 'Trofimov Andrey',
    },
  },
]

const StyledExplorePageContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  padding: '32px 0',
  gap: '32px',
})

export const ExplorePage = () => {
  const { coinFlip } = useTestFlip()

  return (
    <PageLayout>
      <Title>Games</Title>
      <StyledExplorePageContainer>
        {explorePageData.map((item, index) => {
          return (
            <GameCard
              {...item}
              id={index.toString()}
              key={index}
            />
          )
        })}
      </StyledExplorePageContainer>
      <Button onClick={() => {
        coinFlip()
      }}
      >
        FLIP
      </Button>
    </PageLayout>
  )
}
