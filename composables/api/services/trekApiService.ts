import { useTrekApi } from '../trekApi'
import { ApiTrek } from '@/types/treks'

export const getTreks = async (): Promise<ApiTrek[]> => {
  const response = await useTrekApi().get('/treks')
  return response.data
}

export const getTrek = async (id: number): Promise<ApiTrek> => {
  const response = await useTrekApi().get(`/treks/${id}`)
  return response.data
}
