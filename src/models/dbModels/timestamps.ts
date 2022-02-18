import { object, string, TypeOf } from 'zod'

const timestamps = object({
  created_at: string(),
  updated_at: string()
})

export type TimeStamps = TypeOf<typeof timestamps>

export default timestamps
