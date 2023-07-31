import axios, { AxiosInstance } from 'axios'
import { config } from '@/config/api.conf'
import { useApiErrorHandler } from '@/composables/apiErrorHandler'

let axiosInstance: AxiosInstance

export const useTrekApi = (): AxiosInstance => {
  if (!axiosInstance) {
    axiosInstance = axios.create(config())
    const router = useRouter()

    axiosInstance.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        useApiErrorHandler(error)
        router.push('/error')
        return Promise.reject(error)
      },
    )
  }

  return axiosInstance
}
