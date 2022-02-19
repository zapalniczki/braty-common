import tableBase from './tableBase'
import price from './price'
import { string, TypeOf, boolean } from 'zod'
import collection from './collection'
import icon from './icon'
import label from './label'

const product = tableBase.merge(price).extend({
  bestseller: boolean(),
  collection_key: collection.shape.key,
  description_en: string(),
  description_pl: string(),
  featured: boolean(),
  icon_key: icon.shape.key,
  label_key: label.shape.key,
  mold_id: string(),
  name_en: string(),
  name_pl: string(),
  visible: boolean()
})

export type Product = TypeOf<typeof product>

export default product
