import { TypeOf, array, object, enum as zenum, string } from 'zod'

const brochureIcon = object({
  level: zenum(['ICON']),
  id: string().uuid(),
  label_pl: string(),
  pngPath: string(),
  name_pl: string()
})

const brochureLabel = object({
  level: zenum(['LABEL']),
  id: string().uuid(),
  label_pl: string(),
  icons: array(brochureIcon)
})

const brochureCollection = object({
  level: zenum(['COLLECTION']),
  id: string().uuid(),
  label_pl: string(),
  labels: array(brochureLabel)
})

const brochureData = array(brochureCollection)

export type BrochureData = TypeOf<typeof brochureData>

export default brochureData
