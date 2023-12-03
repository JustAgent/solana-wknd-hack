import { makeAutoObservable } from 'mobx'

import { type Game, GameStatusEnum, ProfileStatusEnum } from '../../../api/Api.ts'
import { type ActivateDeactivate } from '../../utils/store/activate-deactivate/activate-deactivate.ts'
import {
  type RequestContext,
  type StoreRequester,
  storeReset,
} from '../../utils/store/store-requester/store-requester.ts'
import { type ErrorStore } from '../Error/ErrorStore.ts'
import { type RootStore } from '../RootStore.ts'

export class GameStore implements ActivateDeactivate, StoreRequester {
  data: Game | undefined
  errorStore: ErrorStore

  isLoading = false
  isLoaded = false
  isActivated = false
  currentRequest?: RequestContext
  requestCount = 0

  constructor({ errorStore }: RootStore) {
    this.errorStore = errorStore
    makeAutoObservable(this, {
      errorStore: false,
    })
  }

  activate(): void {
    this.isActivated = true
    this.request()
  }

  deactivate(): void {
    this.reset()
    this.isActivated = false
  }

  private request(): void {
    // storeRequest(
    //   this,
    //   () => api.games.gamesDetails({id: '0'}),
    //   (data) => {
    //     this.data = data as Game[]
    //   },
    // )
    this.data = {
      creator: {
        name: 'Aleksey Levin',
        photo_url: '',
        status: ProfileStatusEnum.BUILDER,
        id: '',
        createdGames: [],
      },
      description: 'My first game',
      id: '0',
      image_url: '',
      name: '',
      status: {
        updated_at: 1000000000,
        status: GameStatusEnum.ACCEPTED,
      },
    }
  }

  reset(): void {
    storeReset(this)
  }
}
