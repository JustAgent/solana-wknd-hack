import { makeAutoObservable } from 'mobx'

import { type Game, GameStatusEnum, ProfileStatusEnum, RangValidatorEnum } from '../../../api/Api.ts'
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
        photo_url: 'https://sun9-74.userapi.com/impg/YtCRwIdmov7T--qM4WKcScTpHOqjO_oj__-a1Q/xy1iK74Rtw4.jpg?size=1073x1080&quality=96&sign=e1d115a520a5404da05ef0fff8b26d6c&type=album',
        status: ProfileStatusEnum.BUILDER,
        id: '0',
        createdGames: [],
      },
      validator: {
        name: 'Aleksey Levin',
        photo_url: 'https://sun9-63.userapi.com/impg/moqqHBuDT3Mjgu9U1yDBpJMmSTrzRHpKbefJlw/8CGVkmhBt0s.jpg?size=640x640&quality=96&sign=496715cc195ab44dacc71fc52828fbb2&type=album',
        status: ProfileStatusEnum.BUILDER,
        id: '0',
        rangValidator: RangValidatorEnum.S,
      },
      description: 'My first game',
      id: '0',
      image_url: 'https://sun9-23.userapi.com/impg/HY3sivD2iBE-MYMEYOSDcuiRXFaBJUAo0beCXg/lLNnHTEB9Wc.jpg?size=1024x1024&quality=96&sign=2c692db8c08f3fba66878d29dfed3196&type=album',
      name: 'Mega Doka3',
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
