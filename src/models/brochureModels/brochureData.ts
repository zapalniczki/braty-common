import { array, enum as zenum, number, object, string, TypeOf } from 'zod'
import collection from '../dbModels/collection'
import icon from '../dbModels/icon'

const label = array(number())

const brochureIcon = icon.extend({
  level: zenum(['ICON']),
  label_pl_unicode: array(number()),
  pngPath: string(),
  name_pl: string(),
  name_pl_unicode: array(number()),
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
