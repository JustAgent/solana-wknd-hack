import { observer } from 'mobx-react-lite'
import { type FC, useState } from 'react'

import { type Game } from '../../../../../api/Api.ts'
import { Txt } from '../../../../UIkit'
import { gamePermissions } from '../../../../utils/permissions/permissions.ts'
import { CheckGame } from '../CheckGame/CheckGame.tsx'
import { HideAction } from '../HideAction.tsx'
import { ValidateButton } from '../ValidateButton/ValidateButton.tsx'

export interface GameActionsValidatorProps {
  game?: Game
}

const permissions = gamePermissions.validator

export const GameActionsValidator: FC<GameActionsValidatorProps> = observer(({
  game,
}) => {
  const [url, setUrl] = useState<string | undefined>()

  return (
    <>
      <HideAction hide={!url}>
        <CheckGame onGet={(url) => {
          setUrl(url)
        }}
        />
      </HideAction>
      <HideAction hide={!!url}>
        <ValidateButton game={game} />
      </HideAction>
      <HideAction hide={!!url}>
        <Txt>{url}</Txt>
      </HideAction>
    </>
  )
})
