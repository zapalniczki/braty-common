import tableBase from './tableBase'
import price from './price'
import { string, TypeOf, number, boolean } from 'zod'

const product = tableBase.merge(price).extend({
  mold_id: string(),
  label_id: string(),
  icon_id: string(),
  description_pl: string(),
  description_en: string(),
  collection_id: string(),
  bestseller: boolean(),
  visible: boolean(),
  featured: boolean(),
  name_pl: string(),
  name_en: string()
})

export type Product = TypeOf<typeof product>

export default product
