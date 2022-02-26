import { boolean, string, TypeOf, enum as zenum } from 'zod'
import { marketingStatus } from '../dbEnums'
import tableBase from './tableBase'

const marketing = tableBase.extend({
  email: string().nullable(),
  is_test: boolean(),
  name: string().nullable(),
  notes: string().nullable(),
  phone: string().nullable(),
  plus_code: string().nullable(),
  send_brochure_agreement: boolean(),
  status: marketingStatus
})

export type Marketing = TypeOf<typeof marketing>

export default marketing
