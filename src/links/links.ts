import { WEBISTE_URL, BROWSER_ROUTER_SUFFIX } from './index'
import ROUTES from './ROUTES'
import { SEPARATORS } from '../constants'
import { Product, Order, order } from '..'

export const getViewProductLink = (productId: Product['id']) =>
  `${WEBISTE_URL}${BROWSER_ROUTER_SUFFIX}${ROUTES.PRODUCTS}${SEPARATORS.PATH}${productId}` as const

export const getViewOrderLink = (orderId: Order['id']) =>
  `${WEBISTE_URL}${BROWSER_ROUTER_SUFFIX}${ROUTES.ORDERS}${SEPARATORS.PATH}${orderId}` as const
