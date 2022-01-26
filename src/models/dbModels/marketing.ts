import { boolean, string, TypeOf, enum as zenum } from 'zod'
import tableBase from './tableBase'

const marketing = tableBase.extend({
  email: string().nullable(),
  is_test: boolean(),
  name: string().nullable(),
  notes: string().nullable(),
  phone: string().nullable(),
  plus_code: string().nullable(),
  send_brochure_agreement: boolean(),
  send_brochure_cyclic_agreement: boolean(),
  status: zenum(['REJECTED', 'TODO', 'INTERESTED', 'UNANSWERED'])
})

export type Marketing = TypeOf<typeof marketing>

export default marketing
