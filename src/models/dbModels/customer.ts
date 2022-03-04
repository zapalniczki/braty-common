import tableBase from './tableBase'
import { boolean, string, TypeOf } from 'zod'

const customer = tableBase.extend({
  address_id: string().uuid(),
  email: string(),
  full_name: string(),
  nip: string().nullable(),
  phone: string(),
  preferred_delivery: string().uuid(),
  preferred_payment: string().uuid(),
  shipping_id: string().uuid().nullable(),
  user_id: string().uuid(),
  is_test: boolean()
})

export type Customer = TypeOf<typeof customer>

export default customer
