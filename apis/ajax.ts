import axios, { AxiosResponse } from 'axios'

export enum AjaxResultCode {
  SUCCESS = 200,
}

declare global {
  type AjaxResult<Data = any> = {
    status: AjaxResultCode
    message: string
    data: Data
  }
}

const ajax = axios.create({
  timeout: 10000,
  baseURL: 'https://api.xclhove.top',
})

ajax.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {},
)

ajax.interceptors.response.use(
  (response: AxiosResponse<AjaxResult>) => {
    const result = response.data
    if (result.status !== AjaxResultCode.SUCCESS) {
      throw result
    }
    return response
  },
  (error) => {
    throw error
  },
)

export default ajax
