import { TypeOf, number, array, object, enum as zenum, string } from 'zod'

const brochureIcon = object({
  level: zenum(['ICON']),
  id: string().uuid(),
  label_pl: string(),
  label_pl_unicode: array(number()),
  pngPath: string(),
  name_pl: string()
})

const brochureLabel = object({
  level: zenum(['LABEL']),
  id: string().uuid(),
  label_pl: string(),
  label_pl_unicode: array(number()),
  icons: array(brochureIcon)
})

const brochureCollection = object({
  level: zenum(['COLLECTION']),
  id: string().uuid(),
  label_pl: string(),
  label_pl_unicode: array(number()),
  labels: array(brochureLabel)
})

const brochureData = array(brochureCollection)

export type BrochureData = TypeOf<typeof brochureData>

export default brochureData
