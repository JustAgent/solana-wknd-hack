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

  private async request() {
    // axios.get('/api/get-games', {
    //   data: {
    //     gameId: 1,
    //   },
    // }).then((data) => {
    //   this.data = data.data
    // })
    this.data = [{
      creator_name: 'Aleksey Levin',
      creator_png: 'https://sun9-74.userapi.com/impg/YtCRwIdmov7T--qM4WKcScTpHOqjO_oj__-a1Q/xy1iK74Rtw4.jpg?size=1073x1080&quality=96&sign=e1d115a520a5404da05ef0fff8b26d6c&type=album',
      description: 'My first game',
      id: '0',
      image_url: 'https://sun9-23.userapi.com/impg/HY3sivD2iBE-MYMEYOSDcuiRXFaBJUAo0beCXg/lLNnHTEB9Wc.jpg?size=1024x1024&quality=96&sign=2c692db8c08f3fba66878d29dfed3196&type=album',
      name: 'Mega Doka3',
      status: 'accepted',
    }, {
      creator_name: 'Aleksey Levin',
      creator_png: 'https://sun9-74.userapi.com/impg/YtCRwIdmov7T--qM4WKcScTpHOqjO_oj__-a1Q/xy1iK74Rtw4.jpg?size=1073x1080&quality=96&sign=e1d115a520a5404da05ef0fff8b26d6c&type=album',
      description: 'My first game',
      id: '0',
      image_url: 'https://sun9-23.userapi.com/impg/HY3sivD2iBE-MYMEYOSDcuiRXFaBJUAo0beCXg/lLNnHTEB9Wc.jpg?size=1024x1024&quality=96&sign=2c692db8c08f3fba66878d29dfed3196&type=album',
      name: 'Mega Doka3',
      status: 'accepted',
    }, {
      creator_name: 'Aleksey Levin',
      creator_png: 'https://sun9-74.userapi.com/impg/YtCRwIdmov7T--qM4WKcScTpHOqjO_oj__-a1Q/xy1iK74Rtw4.jpg?size=1073x1080&quality=96&sign=e1d115a520a5404da05ef0fff8b26d6c&type=album',
      description: 'My first game',
      id: '0',
      image_url: 'https://sun9-23.userapi.com/impg/HY3sivD2iBE-MYMEYOSDcuiRXFaBJUAo0beCXg/lLNnHTEB9Wc.jpg?size=1024x1024&quality=96&sign=2c692db8c08f3fba66878d29dfed3196&type=album',
      name: 'Mega Doka3',
      status: 'accepted',
    }, {
      creator_name: 'Aleksey Levin',
      creator_png: 'https://sun9-74.userapi.com/impg/YtCRwIdmov7T--qM4WKcScTpHOqjO_oj__-a1Q/xy1iK74Rtw4.jpg?size=1073x1080&quality=96&sign=e1d115a520a5404da05ef0fff8b26d6c&type=album',
      description: 'My first game',
      id: '0',
      image_url: 'https://sun9-23.userapi.com/impg/HY3sivD2iBE-MYMEYOSDcuiRXFaBJUAo0beCXg/lLNnHTEB9Wc.jpg?size=1024x1024&quality=96&sign=2c692db8c08f3fba66878d29dfed3196&type=album',
      name: 'Mega Doka3',
      status: 'accepted',
    }]
  }

  reset(): void {
    storeReset(this)
  }
}
