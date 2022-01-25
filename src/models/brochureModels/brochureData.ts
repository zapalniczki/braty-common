import { array, enum as zenum, number, object, string, TypeOf } from 'zod'
import collection from '../dbModels/collection'

const label = array(number())

const brochureIcon = object({
  level: zenum(['ICON']),
  label,
  pngPath: string(),
  name: label,
  link: string()
})
export type BrochureIcon = TypeOf<typeof brochureIcon>

const brochureLabel = object({
  level: zenum(['LABEL']),
  label,
  icons: array(brochureIcon)
})
export type BrochureLabel = TypeOf<typeof brochureLabel>

const brochureCollection = collection
  .pick({
    is_featured: true
  })
  .extend({
    level: zenum(['COLLECTION']),
    label,
    labels: array(brochureLabel)
  })
export type BrochureCollection = TypeOf<typeof brochureCollection>

const brochureData = array(brochureCollection)
export type BrochureData = TypeOf<typeof brochureData>

export default brochureData
