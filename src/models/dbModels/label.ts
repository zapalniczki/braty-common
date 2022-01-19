import tableBase from './tableBase'
import { string, TypeOf } from 'zod'
import international from './international'

const label = tableBase.merge(international)

export type Label = TypeOf<typeof label>

export default label
