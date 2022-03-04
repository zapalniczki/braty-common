import { string, TypeOf } from 'zod'
import tableBase from './tableBase'

const user = tableBase.extend({
  email: string().email()
})

export type User = TypeOf<typeof user>

export default user
