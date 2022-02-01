import tableBase from './tableBase'
import international from './international'
import { boolean, string, TypeOf } from 'zod'

const collection = tableBase.merge(international).extend({
  visible: boolean(),
  is_featured: boolean(),
  key: string()
})

export type Collection = TypeOf<typeof collection>

export default collection
