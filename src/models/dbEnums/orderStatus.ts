import { enum as zenum, TypeOf } from 'zod'

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

export default orderStatus
