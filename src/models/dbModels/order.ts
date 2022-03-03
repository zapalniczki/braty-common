import { boolean, number, string, TypeOf } from 'zod'
import { orderStatus } from '..'
import parcel from './parcel'
import tableBase from './tableBase'
import voucher from './voucher'

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
  customer_id: string().uuid(),
  voucher_id: voucher.shape.id.nullable(),
  parcel_id: parcel.shape.id.nullable(),
  is_test: boolean()
})

export type Order = TypeOf<typeof order>

export default order
