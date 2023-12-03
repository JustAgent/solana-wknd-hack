import { action } from 'mobx'
import { type ErrorResponse } from 'react-router-dom'

import { type HttpResponse } from '../../../../api/Api.ts'
import { type ErrorStore } from '../../../stores/Error/ErrorStore.ts'
import { errorResponseToMessage, stringifyError } from '../../error'
import { tap } from '../../structs'

/**
 * Used to type args of request methods
 */
export interface OnCompleteRequest<Req, Data> {
  req: Req
  onComplete?: (data: Data) => void
}

/**
 * Maintains request statuses. Prohibits concurrent requests.
 * Error is supposed to be shown through ErrorStore.
 */
export interface StoreRequester {
  isLoading: boolean // indicates, if the request is in process. Setting loading to false will cancel the request
  isLoaded: boolean
  errorStore: ErrorStore
  requestCount: number
  currentRequest?: RequestContext // current request. Helps to prevent concurrent request
  reset: () => void
}

export interface RequestContext {
  id: number
  req?: Promise<unknown>
}

export const storeRequestGeneric = <ResponseType>(
  target: StoreRequester,
  requester: () => Promise<ResponseType>,
  responseHandler: (response: ResponseType) => void,
  errorHandler: (error: unknown) => void,
  cancel?: boolean, // whether to cancel request that is in process
): void => {
  if (cancel || !target.currentRequest) {
    target.isLoading = true
    const context: RequestContext = {
      id: target.requestCount++,
    }
    const finish = (resultHandler: () => void) => {
      // handle result only if request is not replaced by another and not cancelled
      if (target.currentRequest?.id === context.id) {
        target.currentRequest = undefined
        target.isLoading = false
        resultHandler()
      }
      // check, if we need to handle request results
    }
    context.req = requester()
      .then(
        tap(
          action((data) => {
            finish(() => {
              responseHandler(data)
            })
          }),
        ),
      )
      .catch(
        action((error) => {
          finish(() => {
            errorHandler(error)
          })
        }),
      )
    target.currentRequest = context
  }
}

// Promise will fire void if the error is thrown and handled
export const storeRequest = <Data>(
  target: StoreRequester,
  requester: () => Promise<HttpResponse<Data, ErrorResponse> | void>,
  callback: (data: Data) => void,
  options?: {
    hideError?: boolean | ((error: unknown) => boolean)
    onError?: (error: unknown) => void
    cancel?: boolean // whether to cancel request that is processed in the same store
  },
): void => {
  const handleError = (err: string) => {
    if (!options?.hideError || (typeof options.hideError === 'function' && !options.hideError(err))) {
      target.errorStore.showError(err)
    }

    options?.onError?.(err)
  }
  storeRequestGeneric(
    target,
    requester,
    action((response: HttpResponse<Data, ErrorResponse> | void) => {
      if (!response) return

      if (response.ok) {
        target.isLoaded = true
        callback(response.data)
      } else {
        handleError(errorResponseToMessage(response?.error))
      }
    }),
    action((error) => {
      if (error instanceof Response && 'error' in error) {
        handleError(errorResponseToMessage(error.error as ErrorResponse))
      } else {
        handleError(stringifyError(error))
      }
    }),
    options?.cancel,
  )
}

export const storeRequestFetch = <Data>(
  target: StoreRequester,
  requester: () => Promise<Data>,
  callback: (data: Data) => void,
  hideFetchError?: boolean,
): void => {
  const handleError = (err: string) => {
    if (!hideFetchError) {
      target.errorStore.showError(err)
    }
  }
  storeRequestGeneric(
    target,
    requester,
    (response) => {
      target.isLoaded = true
      callback(response)
    },
    (error) => {
      handleError(stringifyError(error))
    },
  )
}

export const storeReset = <Target extends StoreRequester>(target: Target) => {
  target.currentRequest = undefined // cancel current request
  target.isLoading = false
  target.isLoaded = false
}
