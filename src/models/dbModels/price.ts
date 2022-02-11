import { object, string, TypeOf } from 'zod'

const price = object({
  price_pl: string(),
  price_en: string()
})

export type Price = TypeOf<typeof price>

export default price
