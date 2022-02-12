import tableBase from './tableBase'
import { boolean, string, TypeOf, enum as zenum, number } from 'zod'
import voucher from './voucher'
import parcel from './parcel'

const orderStatus = zenum([
  'OPEN',
  'CONFIRMED',
  'PAYMENT_RECEIVED',
  'PRODUCTION',
  'AWAITING_FOR_PICKUP',
  'IN_DELIVERY',
  'COMPLETED',
  'REJECTED'
])

export type OrderStatus = TypeOf<typeof orderStatus>
export const ORDER_STATUSES = orderStatus.options

const order = tableBase.extend({
  delivery_type: string().uuid(),
  payment_type: string().uuid(),
  shipping_id: string().uuid().nullable(),
  status: orderStatus,
  total_pl: number(),
  total_en: number(),
  products_price_pl: number(),
  products_price_en: number(),
  delivery_price_pl: number(),
  delivery_price_en: number(),
  payment_price_pl: number(),
  payment_price_en: number(),
  discount_pl: number(),
  discount_en: number(),
  user_id: string().uuid(),
  voucher_id: voucher.shape.id.nullable(),
  parcel_id: parcel.shape.id.nullable(),
  is_test: boolean()
})

export type Order = TypeOf<typeof order>

export default order
