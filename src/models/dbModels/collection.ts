import international from './international'
import { boolean, string, TypeOf } from 'zod'
import timestamps from './timestamps'

const collection = timestamps.merge(international).extend({
  visible: boolean(),
  is_featured: boolean(),
  // TODO change it do enum
  key: string()
})

export type Collection = TypeOf<typeof collection>

export default collection
