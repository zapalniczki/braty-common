import { boolean, string, TypeOf } from 'zod'
import tableBase from './tableBase'

const marketing = tableBase.extend({
  email: string().nullable(),
  phone: string().nullable(),
  notes: string().nullable(),
  is_test: boolean()
})

export type Marketing = TypeOf<typeof marketing>

export default marketing
