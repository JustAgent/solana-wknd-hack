import axios from 'axios'
import { makeAutoObservable } from 'mobx'

import { type Game } from '../../../api/Api.ts'
import { type ActivateDeactivate } from '../../utils/store/activate-deactivate/activate-deactivate.ts'
import {
  type RequestContext,
  type StoreRequester,
  storeReset,
} from '../../utils/store/store-requester/store-requester.ts'
import { type ErrorStore } from '../Error/ErrorStore.ts'
import { type RootStore } from '../RootStore.ts'

export class GamesListStore implements ActivateDeactivate, StoreRequester {
  data: Game[] | undefined
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
    axios.get('/api/get-games').then((data) => {
      this.data = data.data
    })
  }

  reset(): void {
    storeReset(this)
  }
}
