import { observer } from 'mobx-react-lite'
import React from 'react'
import { useParams } from 'react-router-dom'

import { GameStatusEnum } from '../../../../../api/Api.ts'
import { styled } from '../../../../../styles'
import { Badge, NavLink } from '../../../../UIkit'
import { type Params } from '../../../../utils/router'
import { useActivatedStore } from '../../../../utils/store/activate-deactivate/useActivatedStore.ts'
import { GridBlock } from '../../helper/styles/style.ts'

const BadgesContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$2',
  '@sm': {
    flexDirection: 'column-reverse',
  },
})

const HomeLandSection = observer(() => {
  const { gameId } = useParams<Params>()

  const { gameStore } = useActivatedStore('gameStore')

  return (
    <GridBlock style={{ gridArea: 'HomeLand' }}>
      <BadgesContainer>
        <NavLink
          lgFullWidth
          to={gameStore.data?.creator?.id ? `/bilder/${gameStore.data?.creator?.id}` : location.pathname}
        >
          <Badge
            image={{
              borderRadius: 'circle',
              url: gameStore.data?.creator?.photo_url ?? '',
            }}
            content={{
              title: 'Creator',
              value: gameStore.data?.creator?.name ?? '',
            }}
            wrapperProps={{
              nftPage: true,
            }}
          />
        </NavLink>
        {gameStore.data?.status.status === GameStatusEnum.ACCEPTED && (
          <Badge
            image={{
              borderRadius: 'circle',
              url: 'https://smartboost.ru/wp-content/uploads/2020/02/tick-azzurro-2048x2048.png',
            }}
            content={{
              title: 'Verify',
              value: 'Success!',
            }}
            wrapperProps={{
              nftPage: true,
            }}
          />
        )}
        {(gameStore?.data?.validator !== undefined) && (
          <NavLink
            lgFullWidth
            to={
              `/validator/${gameStore?.data?.validator?.id}`
            }
          >
            <Badge
              content={{ title: 'Validator', value: gameStore?.data?.validator?.name ?? '' }}
              image={{
                url: gameStore?.data?.validator?.photo_url ?? '',
                borderRadius: 'roundedSquare',
              }}
              wrapperProps={{
                nftPage: true,
              }}
            />
          </NavLink>
        )}
      </BadgesContainer>
    </GridBlock>
  )
})

export default HomeLandSection
