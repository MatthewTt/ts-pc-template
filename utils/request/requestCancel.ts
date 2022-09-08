import axios, { AxiosRequestConfig, Canceler } from 'axios'

const pending = new Map<string, Canceler>()
export const getPendingUrl = (config: AxiosRequestConfig) => [config.method, config.url].join('&')

export class RequestCancel {
  addPending(config: AxiosRequestConfig) {
    this.removePending(config)
    const pendingUrl = getPendingUrl(config)
    config.cancelToken = new axios.CancelToken((cancel) => {
      if (!pending.has(pendingUrl)) {
        pending.set(pendingUrl, cancel)
      }
    })
  }
  removePending(config: AxiosRequestConfig) {
    const pendingUrl = getPendingUrl(config)
    if (pending.has(pendingUrl)) {
      const cancel = pending.get(pendingUrl)
      cancel && cancel()
      pending.delete(pendingUrl)
    }
  }
  removeAllPending() {
    pending.forEach((cancel) => cancel())
    pending.clear()
  }
}
