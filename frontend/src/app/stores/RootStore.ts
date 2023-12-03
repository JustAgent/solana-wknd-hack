import { DialogStore } from './Dialog/DialogStore'
import { ErrorStore } from './Error/ErrorStore'
import { GameStore } from './Game/GameStore.ts'
import { GamesListStore } from './GamesListStore/GamesListStore.ts'

export class RootStore {
  dialogStore: DialogStore
  errorStore: ErrorStore
  gameStore: GameStore
  gameListStore: GamesListStore
  constructor() {
    this.dialogStore = new DialogStore()
    this.errorStore = new ErrorStore(this)
    this.gameStore = new GameStore(this)
    this.gameListStore = new GamesListStore(this)
  }
}

export const rootStore = new RootStore()
