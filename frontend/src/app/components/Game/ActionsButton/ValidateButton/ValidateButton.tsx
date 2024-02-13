import { type FC, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { type Game } from '../../../../../api/Api.ts'
import { Button } from '../../../../UIkit'

interface ValidateButtonProps {
  game?: Game
}

export const ValidateButton: FC<ValidateButtonProps> = ({ game }) => {
  const navigate = useNavigate()

  const handleClick = useCallback(() => {
    console.log(`/validate/game/${game?.id}`)
    navigate(`/validate/game/${game?.id}`)
  }, [navigate])

  return (
    <Button primary onClick={handleClick}>
      Check game
    </Button>
  )
}
