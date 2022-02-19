import { array, string, TypeOf } from 'zod'
import timestamps from './timestamps'
import { iconKey } from '..'
import collection from './collection'

const label = timestamps.extend({
  collection_key: collection.shape.key,
  key: string(),
  icons: array(iconKey)
})

export type Label = TypeOf<typeof label>

export default label
