import { string, TypeOf } from 'zod'
import tableBase from './tableBase'

const marketing = tableBase.extend({
  email: string().optional(),
  phone: string().optional(),
  notes: string().optional()
})

export type Marketing = TypeOf<typeof marketing>

export default marketing
