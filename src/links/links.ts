import ROUTES from './routes'
import { Product, Order } from '..'
import { SEPARATORS } from '../constants'
import { WEBISTE_URL, BROWSER_ROUTER_SUFFIX } from './index'

export const getViewProductLink = (productId: Product['id']) =>
  `${WEBISTE_URL}${BROWSER_ROUTER_SUFFIX}${ROUTES.PRODUCTS}${SEPARATORS.PATH}${productId}` as const

export const getViewOrderLink = (orderId: Order['id']) =>
  `${WEBISTE_URL}${BROWSER_ROUTER_SUFFIX}${ROUTES.ORDERS}${SEPARATORS.PATH}${orderId}` as const
