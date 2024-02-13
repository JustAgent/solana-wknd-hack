import { type FC, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { type Game } from '../../../../../api/Api.ts'
import { Button } from '../../../../UIkit'

interface ValidateButtonProps {
  game?: Game
}

export const RejectButton: FC<ValidateButtonProps> = ({ game }) => {
  const navigate = useNavigate()

  const params = useParams()

  const handleClick = useCallback(() => {
    console.log(`/reject/game/${game?.id}`)
    navigate(`/reject/game/${params.gameId}`)
  }, [navigate])

  return (
    <Button primary onClick={handleClick}>
      Reject Game
    </Button>
  )
}
