import { useTrekApi } from '@/composables/api/trekApi'
import { ApiTrek } from '@/types/treks'

export const getTreks = async (): Promise<ApiTrek[]> => {
  const response = await useTrekApi().get('/treks')
  return response.data
}

export const getTrek = async (id: number): Promise<ApiTrek> => {
  const response = await useTrekApi().get(`/treks/${id}`)
  return response.data
}

// Use Fetch
/*
export const getTrek {data: treks, error} = useFetch(apiURL +`/treks/${id}`, {
  server: false,
}).catch((error) => useApiErrorHandler(error.data))
*/
