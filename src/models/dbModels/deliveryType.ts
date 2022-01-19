import international from './international'
import tableBase from './tableBase'
import { string, number, boolean, TypeOf } from 'zod'

const deliveryType = tableBase.merge(international).extend({
  frontend_icon_name: string(),
  is_enabled: boolean(),
  price: number(),
  requires_address: boolean(),
  time: string(),
  allows_cash_payment: boolean()
})

export type DeliveryType = TypeOf<typeof deliveryType>

export default deliveryType
