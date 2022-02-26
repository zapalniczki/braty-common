import { enum as zenum, TypeOf } from 'zod'

export const imageSize = zenum([
  'TILE',
  'LARGE',
  'TILE_REVERSE',
  'THUMBNAIL',
  'BASKET',
  'LONG'
])
export type ImageSize = TypeOf<typeof imageSize>

export default imageSize
