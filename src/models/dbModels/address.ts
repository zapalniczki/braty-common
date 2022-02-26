import { string, TypeOf } from 'zod'
import { country } from '../dbEnums'
import tableBase from './tableBase'

const address = tableBase.extend({
  city: string(),
  post_code: string(),
  street_address: string(),
  country
})

export type Address = TypeOf<typeof address>

export default address
