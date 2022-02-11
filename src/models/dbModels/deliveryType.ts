import { boolean, string, TypeOf } from 'zod'
import iconName from './iconName'
import international from './international'
import price from './price'
import tableBase from './tableBase'

const deliveryType = tableBase.merge(international).merge(price).extend({
  icon_name: iconName,
  is_enabled: boolean(),
  requires_address: boolean(),
  description_pl: string(),
  description_en: string(),
  cash_payment: boolean().nullable(),
  domestic: boolean(),
  abroad: boolean()
})

export type DeliveryType = TypeOf<typeof deliveryType>

export default deliveryType
