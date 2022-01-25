import { array, enum as zenum, number, object, string, TypeOf } from 'zod'
import collection from '../dbModels/collection'

const unicode = array(number())

const brochureIcon = object({
  level: zenum(['ICON']),
  label: string(),
  label_unicode: unicode,
  pngPath: string(),
  name: string(),
  name_unicode: unicode,
  link: string()
})
export type BrochureIcon = TypeOf<typeof brochureIcon>

const brochureLabel = object({
  level: zenum(['LABEL']),
  label: string(),
  label_unicode: unicode,
  icons: array(brochureIcon)
})
export type BrochureLabel = TypeOf<typeof brochureLabel>

const brochureCollection = collection
  .pick({
    is_featured: true
  })
  .extend({
    level: zenum(['COLLECTION']),
    label: string(),
    label_unicode: unicode,
    labels: array(brochureLabel)
  })
export type BrochureCollection = TypeOf<typeof brochureCollection>

const brochureData = array(brochureCollection)
export type BrochureData = TypeOf<typeof brochureData>

export default brochureData
