import {
  string,
  boolean,
  number,
  object,
  TypeOf,
  ZodFirstPartyTypeKind
} from 'zod'

const remoteConfig = object({
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
  howToCreateOrder: boolean(),
  order: boolean(),
  products: boolean(),
  signIn: boolean(),
  signUp: boolean(),
  signedOut: boolean(),
  valentinesDay: boolean(),
  viewProduct: boolean(),
  // HOME
  homeFeaturedCount: number(),
  homeBestsellersDisplay: boolean(),
  homeFeaturedDisplay: boolean(),
  homeCatalogueDisplay: boolean(),
  homeValentinesDayOrder: number(),
  homeFeaturedOrder: number(),
  homeCatalogueOrder: number(),
  homeBestsellersOrder: number(),
  // DATA
  catalogue_cover: string(),
  catalogue_link: string(),
  // REST
  snow: boolean(),
  i18n: boolean(),
  vouchers: boolean()
})

export type RemoteConfig = TypeOf<typeof remoteConfig>

export default remoteConfig
