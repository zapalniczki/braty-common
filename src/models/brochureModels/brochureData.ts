import {
  TypeOf,
  number,
  array,
  object,
  enum as zenum,
  string,
  boolean
} from 'zod'
import icon from '../dbModels/icon'
import collection from '../dbModels/collection'
import label from '../dbModels/label'

const brochureIcon = icon.extend({
  level: zenum(['ICON']),
  label_pl_unicode: array(number()),
  pngPath: string(),
  name_pl: string(),
  name_pl_unicode: array(number()),
  link: string()
})
export type BrochureIcon = TypeOf<typeof brochureIcon>

const brochureLabel = label.extend({
  level: zenum(['LABEL']),
  label_pl_unicode: array(number()),
  icons: array(brochureIcon)
})
export type BrochureLabel = TypeOf<typeof brochureLabel>

const brochureCollection = collection.extend({
  level: zenum(['COLLECTION']),
  label_pl_unicode: array(number()),
  labels: array(brochureLabel)
})
export type BrochureCollection = TypeOf<typeof brochureCollection>

const brochureData = array(brochureCollection)
export type BrochureData = TypeOf<typeof brochureData>

export default brochureData
