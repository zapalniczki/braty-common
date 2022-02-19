import { string, TypeOf } from 'zod'
import timestamps from './timestamps'

const tableBase = timestamps.extend({
  id: string().uuid()
})

export type TableBase = TypeOf<typeof tableBase>

export default tableBase
