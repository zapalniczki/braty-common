import tableBase from './tableBase'
import { boolean, string, TypeOf } from 'zod'

const collection = tableBase.extend({
  label_pl: string(),
  label_en: string(),
  visible: boolean(),
  is_featured: boolean()
})

export type Collection = TypeOf<typeof collection>

export default collection
