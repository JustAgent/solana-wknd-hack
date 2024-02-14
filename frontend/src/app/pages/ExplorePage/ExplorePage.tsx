import { observer } from 'mobx-react-lite'
import { useState } from 'react'

import { styled } from '../../../styles'
import { GameCard } from '../../components/Game/Card/GameCard.tsx'
import { Button, PageLayout, Popover, PopoverContent, PopoverTrigger, Txt } from '../../UIkit'
import { Title } from '../../UIkit/PageLayout/Title/Title.tsx'
import { useActivatedStore } from '../../utils/store/activate-deactivate/useActivatedStore.ts'

const sortValues: Array<{
  value?: string
  sortBy?: string
  label: string
}> = [
  {
    value: undefined,
    sortBy: undefined,
    label: 'Relevance',
  },
  {
    value: 'date_start',
    sortBy: 'asc',
    label: 'Start date: earliest',
  },
  {
    value: 'date_start',
    sortBy: 'desc',
    label: 'Start date: latest',
  },
  {
    value: 'date_end',
    sortBy: 'asc',
    label: 'End date: earliest',
  }, {
    value: 'date_end',
    sortBy: 'desc',
    label: 'End date: latest',
  },
  {
    value: 'personal_reward',
    sortBy: 'asc',
    label: 'Campaign reward: more',
  },
  {
    value: 'personal_reward',
    sortBy: 'desc',
    label: 'Campaign reward: less',
  },
  {
    value: 'campaign_reward',
    sortBy: 'asc',
    label: 'Personal reward: more',
  },
  {
    value: 'campaign_reward',
    sortBy: 'desc',
    label: 'Personal reward: less',
  },
]

const StyledExplorePageContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  padding: '32px 0',
  gap: '32px',
})

const Spacer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  gap: '$3',
})

export const ExplorePage = observer(() => {
  const { gameListStore } = useActivatedStore('gameListStore')
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)

  return (
    <PageLayout>
      <Title>Games</Title>
      <div style={{ display: 'flex', gap: '32px', paddingTop: '32px', width: '432px' }}>
        <Popover isOpen={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger>
            <Button
              fullWidth
              secondary
              iconCover
              blueBorder
            >
              Filters
            </Button>
          </PopoverTrigger>
          <PopoverContent css={{
            width: '200px',
          }}
          >
            <Spacer>
              <Txt>NFT</Txt>
              <Txt>GameFi</Txt>
              <Txt>DeFi</Txt>
              <Txt>SocialFi</Txt>
              <Txt>P2E</Txt>
            </Spacer>
          </PopoverContent>
        </Popover>
        <Popover isOpen={isOpen2} onOpenChange={setIsOpen2}>
          <PopoverTrigger>
            <Button
              fullWidth
              secondary
              iconCover
              blueBorder
            >
              Sort
            </Button>
          </PopoverTrigger>
          <PopoverContent css={{
            width: '200px',
          }}
          >
            <Spacer>
              <Txt>по дате</Txt>
              <Txt>по убыванию</Txt>
              <Txt>по возрастанию</Txt>
              <Txt>по рейтингу</Txt>
            </Spacer>
          </PopoverContent>
        </Popover>
      </div>
      <StyledExplorePageContainer>
        {gameListStore.data?.map((item, index) => {
          return (
            <GameCard
              {...item}
              id={index.toString()}
              key={index}
            />
          )
        })}
      </StyledExplorePageContainer>
    </PageLayout>
  )
})
