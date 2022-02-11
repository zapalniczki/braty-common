import { boolean, string, TypeOf } from 'zod'
import iconName from './iconName'
import international from './international'
import price from './price'
import tableBase from './tableBase'

const paymentType = tableBase.merge(international).merge(price).extend({
  abroad: boolean(),
  description_en: string(),
  description_pl: string(),
  domestic: boolean(),
  icon_name: iconName,
  in_person: boolean(),
  is_enabled: boolean()
})

export type PaymentType = TypeOf<typeof paymentType>

export default paymentType
