import {
  TypeOf,
  number,
  array,
  object,
  enum as zenum,
  string,
  boolean
} from 'zod'

const brochureIcon = object({
  level: zenum(['ICON']),
  id: string().uuid(),
  label_pl: string(),
  label_pl_unicode: array(number()),
  pngPath: string(),
  name_pl: string(),
  name_pl_unicode: array(number()),
  link: string()
})
export type BrochureIcon = TypeOf<typeof brochureIcon>

const brochureLabel = object({
  level: zenum(['LABEL']),
  id: string().uuid(),
  label_pl: string(),
  label_pl_unicode: array(number()),
  icons: array(brochureIcon)
})
export type BrochureLabel = TypeOf<typeof brochureLabel>

const brochureCollection = object({
  level: zenum(['COLLECTION']),
  id: string().uuid(),
  is_featured: boolean(),
  label_pl: string(),
  label_pl_unicode: array(number()),
  labels: array(brochureLabel)
})
export type BrochureCollection = TypeOf<typeof brochureCollection>

const brochureData = array(brochureCollection)
export type BrochureData = TypeOf<typeof brochureData>

export default brochureData
