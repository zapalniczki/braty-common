import { enum as zenum, TypeOf } from 'zod'
import icon from './icon'
import label from './label'
import tableBase from './tableBase'

const status = zenum(['IN_PROGRESS', 'DONE', 'UNDONE'])
export type MoldStatus = TypeOf<typeof status>

const mold = tableBase.extend({
  status: status,
  label_key: label.shape.key,
  icon_key: icon.shape.key
})

export type Mold = TypeOf<typeof mold>
export const MOLD_STATUSES = status.options

export default mold
