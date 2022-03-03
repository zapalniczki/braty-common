import { string, boolean, number, object, TypeOf } from 'zod'

const remoteConfig = object({
  // ROUTES
  _404: boolean(),
  adminCallbacks: boolean(),
  adminDeliveryTypes: boolean(),
  adminIcons: boolean(),
  adminLabels: boolean(),
  adminMolds: boolean(),
  adminOrders: boolean(),
  adminPaymentTypes: boolean(),
  adminMarketing: boolean(),
  cart: boolean(),
  checkoutDelivery: boolean(),
  checkoutDetails: boolean(),
  checkoutPayment: boolean(),
  checkoutResult: boolean(),
  christmas2021: boolean(),
  christmas: boolean(),
  companyOffer: boolean(),
  contact: boolean(),
  customer: boolean(),
  deliveryAndPayments: boolean(),
  documents: boolean(),
  home: boolean(),
  europe: boolean(),
  howToCreateOrder: boolean(),
  order: boolean(),
  products: boolean(),
  signIn: boolean(),
  signUp: boolean(),
  signedOut: boolean(),
  valentinesDay: boolean(),
  viewProduct: boolean(),

  // CUSTOMER
  customerRecentOrder: boolean(),
  customerContactDetails: boolean(),
  customerInvoices: boolean(),

  // HOME
  homeFeaturedCount: number(),
  homeBestsellersDisplay: boolean(),
  homeFeaturedDisplay: boolean(),
  homeCatalogueDisplay: boolean(),
  homeValentinesDayOrder: number(),
  homeFeaturedOrder: number(),
  homeCatalogueOrder: number(),
  homeBestsellersOrder: number(),

  // ORDER
  orderId: boolean(),
  orderStatus: boolean(),
  orderBilling: boolean(),
  orderPayment: boolean(),
  orderProducts: boolean(),
  orderInvoice: boolean(),
  orderVoucher: boolean(),
  orderShipping: boolean(),
  orderActions: boolean(),
  orderDetails: boolean(),
  orderContactDetails: boolean(),

  // DATA
  catalogue_cover_pl: string(),
  catalogue_link_pl: string(),
  catalogue_cover_en: string(),
  catalogue_link_en: string(),

  // CONFIG
  snow: boolean(),
  i18n: boolean(),
  vouchers: boolean()
})

export type RemoteConfig = TypeOf<typeof remoteConfig>

export default remoteConfig
