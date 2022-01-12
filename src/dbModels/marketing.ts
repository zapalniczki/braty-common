import { boolean, string, TypeOf } from 'zod'
import tableBase from './tableBase'

const marketing = tableBase.extend({
  email: string().nullable(),
  is_test: boolean(),
  name: string().nullable(),
  notes: string().nullable(),
  phone: string().nullable(),
  plus_code: string().nullable()
})

export type Marketing = TypeOf<typeof marketing>

export default marketing
