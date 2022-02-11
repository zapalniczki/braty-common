import { boolean, number, string, TypeOf } from 'zod'
import tableBase from './tableBase'
import price from './price'

const orderItem = tableBase.merge(price).extend({
  order_id: string().uuid(),
  product_id: string().uuid(),
  quantity: number(),
  is_test: boolean()
})

export type OrderItem = TypeOf<typeof orderItem>

export default orderItem
