import tableBase from './tableBase'
import { boolean, number, string, TypeOf } from 'zod'
import international from './international'
import iconName from './iconName'

const paymentType = tableBase.merge(international).extend({
  price: number(),
  description_pl: string(),
  description_en: string(),
  icon_name: iconName,
  is_enabled: boolean(),
  in_person: boolean()
})

export type PaymentType = TypeOf<typeof paymentType>

export default paymentType
