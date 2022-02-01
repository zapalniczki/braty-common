import { array, string, TypeOf } from 'zod'
import { iconKey } from '..'
import international from './international'
import tableBase from './tableBase'

const label = tableBase.merge(international).extend({
  collection_id: string().uuid(),
  icons: array(iconKey)
})

export type Label = TypeOf<typeof label>

export default label
