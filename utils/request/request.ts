import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { RequestCancel } from './requestCancel'

interface requestConfig extends AxiosRequestConfig {
  loading?: boolean
}
/*const defaultConfig = {
  loadingTime: 300
}*/
class VAxios {
  private instance: AxiosInstance
  // private loadingCount = 0
  private readonly loading: boolean
  constructor(options: requestConfig) {
    this.instance = axios.create(options)
    this.loading = options.loading ?? true
    this.setupInterceptors()
  }

  request<T>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<unknown, T>(config)
        .then((response) => {
          resolve(response)
        })
        .catch((error: unknown) => {
          reject(error)
        })
    })
  }

  private setupInterceptors() {
    const requestCancel = new RequestCancel()
    this.instance.interceptors.request.use(
      (config) => {
        requestCancel.addPending(config)
        // loading
        // this.loading && this.addLoadingCount()
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    this.instance.interceptors.response.use(
      (response) => {
        requestCancel.removePending(response.config)
        // this.loading && this.removeLoadingCount()
        return response.data
      },
      (error) => {
        // 提示信息
        // this.loading && this.removeLoadingCount()
        return Promise.reject(error)
      }
    )
  }

  /*addLoadingCount() {
    this.loadingCount++
    if (this.loadingCount === 1) {
    }
  }

  removeLoadingCount() {
    Promise.resolve().then(() => {
      this.loadingCount--
      if (this.loadingCount === 0) {
      }
    })
  }*/
}

export default VAxios
