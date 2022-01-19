import { enum as zenum, boolean, string, TypeOf } from 'zod'
import international from './international'
import tableBase from './tableBase'

const iconName = zenum([
  'question',
  'exchange-alt',
  'question',
  'truck',
  'box-open'
])

export type IconName = TypeOf<typeof iconName>

export default iconName
