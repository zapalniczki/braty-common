import { object, enum as zenum, boolean, TypeOf, union } from 'zod'
import { language } from '..'
import { order, customer, voucher } from '../dbModels'

const newOrder = object({
  key: zenum(['NEW_ORDER']),
  content: object({
    is_long: boolean().optional(),
    name: customer.shape.full_name,
    order_id: order.shape.id,
    phone: customer.shape.phone
  })
})

const newsletterSignUp = object({
  key: zenum(['NEWSLETTER_SIGNUP']),
  content: object({
    voucher_id: voucher.shape.id
  })
})

const orderStatusChange = object({
  key: zenum(['ORDER_STATUS_CHANGE']),
  content: object({
    name: customer.shape.full_name,
    order_id: order.shape.id,
    order_status: order.shape.status
  })
})

const marketingOffer = object({
  key: zenum(['MARKETING_OFFER']),
  content: object({
    name: customer.shape.full_name.optional()
  })
})

const emailEvent = object({
  to: customer.shape.email,
  language,
  type: union([newOrder, newsletterSignUp, orderStatusChange, marketingOffer])
})

export type EmailEvent = TypeOf<typeof emailEvent>

export default emailEvent
