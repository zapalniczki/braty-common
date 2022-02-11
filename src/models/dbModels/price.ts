import { number, object, TypeOf } from 'zod'

const price = object({
  price_pl: number(),
  price_en: number()
})

export type Price = TypeOf<typeof price>

export default price
