import { observer } from 'mobx-react-lite'
import { type FC } from 'react'

import { type Game } from '../../../../api/Api.ts'
import { styled } from '../../../../styles'
import { useIsValidator } from '../../../hooks/useIsValidator.ts'
import { GameActionsValidator } from './Validator/GameActionsValidator.tsx'

const ButtonsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'stretch',
  gap: '$3',
  width: '100%',
  flexDirection: 'column',
  padding: '0 16px',
  '@sm': {
    flexDirection: 'column',
    gap: '$3',
  },
})

export interface NFTDealActionsProps {
  game?: Game
}

export const GameActions: FC<NFTDealActionsProps> = observer(({
  game,
}) => {
  const isValidator = useIsValidator()

  return (
    <ButtonsContainer>
      {isValidator && (
        <GameActionsValidator
          game={game}
        />
      )
      }
    </ButtonsContainer>
  )
})
