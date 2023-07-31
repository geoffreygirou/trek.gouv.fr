export const config = () => {
  return {
    baseURL: `${useRuntimeConfig().public.apiBaseUrl}`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
  }
}
