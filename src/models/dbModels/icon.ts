import { boolean, TypeOf } from 'zod'
import timestamps from './timestamps'
import { iconKey } from '..'
import international from './international'

const icon = timestamps.merge(international).extend({
  visible: boolean(),
  key: iconKey
})

export type Icon = TypeOf<typeof icon>

export default icon
