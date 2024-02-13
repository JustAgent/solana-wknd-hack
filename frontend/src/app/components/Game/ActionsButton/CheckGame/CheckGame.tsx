import { useCallback } from 'react'
import { useParams } from 'react-router-dom'

import { checkGame } from '../../../../../api/api2.ts'
import { Button } from '../../../../UIkit'

export const CheckGame = ({ onGet }: { onGet: (url: string) => void }) => {
  const params = useParams()

  const handleClick = useCallback(async () => {
    const { codelink } = await checkGame({
      game_id: parseInt(params.gameId),
      validator_id: 1,
    })
    console.log(codelink)
    onGet(codelink)
  }, [params])

  return (
    <Button primary onClick={handleClick}>
      Check game
    </Button>
  )
}
