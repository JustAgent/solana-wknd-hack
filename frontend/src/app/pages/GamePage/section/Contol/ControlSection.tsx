import { observer } from 'mobx-react-lite'
import React from 'react'

import { GameActions } from '../../../../components/Game/ActionsButton/GameActions.tsx'
import { useActivatedStore } from '../../../../utils/store/activate-deactivate/useActivatedStore.ts'
import { GridBlock } from '../../helper/styles/style.ts'

const ControlSection = observer(() => {
  const { gameStore } = useActivatedStore('gameStore')

  return (
    <GridBlock>
      {gameStore.data && (
        <GameActions
          game={gameStore.data}
        />

      )}
    </GridBlock>
  )
})

export default ControlSection
