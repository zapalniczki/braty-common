import { boolean, TypeOf } from 'zod'
import { iconKey } from '..'
import international from './international'
import tableBase from './tableBase'

const icon = tableBase.merge(international).extend({
  visible: boolean(),
  key: iconKey
})

export type Icon = TypeOf<typeof icon>

export default icon
