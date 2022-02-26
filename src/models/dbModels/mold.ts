import { TypeOf } from 'zod'
import { moldStatus } from '../dbEnums'
import icon from './icon'
import label from './label'
import tableBase from './tableBase'

const mold = tableBase.extend({
  status: moldStatus,
  label_key: label.shape.key,
  icon_key: icon.shape.key
})

export type Mold = TypeOf<typeof mold>

export default mold
