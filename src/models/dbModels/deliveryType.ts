import international from './international'
import iconName from './iconName'
import tableBase from './tableBase'
import { string, number, boolean, TypeOf } from 'zod'
import { price } from '.'

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
