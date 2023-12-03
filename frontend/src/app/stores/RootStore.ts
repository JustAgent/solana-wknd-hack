import { DialogStore } from './Dialog/DialogStore'
import { ErrorStore } from './Error/ErrorStore'
import { GameStore } from './Game/GameStore.ts'

export class RootStore {
  dialogStore: DialogStore
  errorStore: ErrorStore
  gameStore: GameStore

  constructor() {
    this.dialogStore = new DialogStore()
    this.errorStore = new ErrorStore(this)
    this.gameStore = new GameStore(this)
  }
}

export const rootStore = new RootStore()
