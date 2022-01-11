const ROUTES = {
  viewProduct: '/#/products' as const,

  ADMIN_CALLBACKS: '/admin_callbacks' as const,
  ADMIN_DELIVERY_TYPES: '/admin_delivery_types' as const,
  ADMIN_ICONS: '/admin_icons' as const,
  ADMIN_LABELS: '/admin_labels' as const,
  ADMIN_MOLDS: '/admin_molds' as const,
  ADMIN_NEWSLETTER_USERS: '/admin_newsletter_users' as const,
  ADMIN_ORDERS: '/admin_orders' as const,
  ADMIN_PAYMENT_TYPES: '/admin_payment_types' as const,

  CHECKOUT_DELIVERY: '/checkout/delivery' as const,
  CHECKOUT_DETAILS: '/checkout/details' as const,
  CHECKOUT_PAYMENT: '/checkout/payment' as const,
  CART: '/cart' as const,
  CHECKOUT_RESULT: '/checkout/result' as const,
  COMPANY_OFFER: '/company_offer' as const,
  CONTACT: '/contact' as const,
  DELIVERY_AND_PAYMENTS: '/delivery_and_payments' as const,
  DOCUMENTS: '/documents' as const,
  HOME: '/' as const,
  HOW_TO_CREATE_ORDER: '/how_to_create_order' as const,
  PRODUCTS: '/products' as const,
  PRODUCTS_ID: '/products/:id' as const,
  ORDERS: '/orders' as const,
  ORDERS_ID: '/orders/:id' as const,
  CHRISTMAS_2021: '/christmas2021' as const,
  SIGN_IN: '/sign_in' as const,
  SIGNED_OUT: '/signed_out' as const,
  SIGN_UP: '/sign_up' as const,
  USER: '/user' as const,
  VALENTINES_DAY: '/valentines_day' as const
}

export default ROUTES
