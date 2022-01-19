import { boolean, string, TypeOf } from 'zod'
import international from './international'
import tableBase from './tableBase'

const icon = tableBase.merge(international).extend({
  visible: boolean()
})

export type Icon = TypeOf<typeof icon>

export default icon
