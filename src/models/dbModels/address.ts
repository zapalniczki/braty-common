import tableBase from './tableBase'
import { string, TypeOf, enum as zenum } from 'zod'

const country = zenum(['POLAND', 'UNITED KINGDOM', 'GERMANY'])
export type Country = TypeOf<typeof country>

const address = tableBase.extend({
  city: string(),
  post_code: string(),
  street_address: string(),
  country
})

export type Address = TypeOf<typeof address>

export default address
