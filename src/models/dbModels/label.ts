import { array, TypeOf } from 'zod'
import { iconKey } from '..'
import international from './international'
import tableBase from './tableBase'

const label = tableBase.merge(international).extend({
  icons: array(iconKey)
})

export type Label = TypeOf<typeof label>

export default label
