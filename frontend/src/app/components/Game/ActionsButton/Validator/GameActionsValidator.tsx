import { observer } from 'mobx-react-lite'
import { type FC } from 'react'

import { type Game } from '../../../../../api/Api.ts'
import { gamePermissions } from '../../../../utils/permissions/permissions.ts'
import { HideAction } from '../HideAction.tsx'
import { ValidateButton } from '../ValidateButton/ValidateButton.tsx'

export interface GameActionsValidatorProps {
  game?: Game
}

const permissions = gamePermissions.validator

export const GameActionsValidator: FC<GameActionsValidatorProps> = observer(({
  game,
}) => {
  return (
    <HideAction hide={!permissions.canValidate(game)}>
      <ValidateButton game={game} />
    </HideAction>
  )
})
