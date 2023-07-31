export type ApiTrek = {
  id: number
  slug: string
  name: string
  description: string
  length: string
  duration: string
  difficulty: string
  maxElevation: string
  link: string
  imagePath: string
}

export type Trek = ApiTrek & {}

export type TreksState = {
  trekList: Trek[]
  currentTrek: Trek | null
}
