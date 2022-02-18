import { array, TypeOf } from 'zod'
import collection from './collection'
import { iconKey } from '..'
import international from './international'
import tableBase from './tableBase'

const label = tableBase.merge(international).extend({
  collection_key: collection.shape.key,
  icons: array(iconKey)
})

export type Label = TypeOf<typeof label>

export default label
