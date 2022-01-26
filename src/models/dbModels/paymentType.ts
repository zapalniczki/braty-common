import tableBase from './tableBase'
import { boolean, number, string, TypeOf } from 'zod'
import international from './international'
import iconName from './iconName'

const paymentType = tableBase.merge(international).extend({
  abroad: boolean(),
  description_en: string(),
  description_pl: string(),
  domestic: boolean(),
  icon_name: iconName,
  in_person: boolean(),
  is_enabled: boolean(),
  price: number()
})

export type PaymentType = TypeOf<typeof paymentType>

export default paymentType
