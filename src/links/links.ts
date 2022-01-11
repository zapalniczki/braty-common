import { WEBISTE_URL, BROWSER_ROUTER_SUFFIX } from './index'
import ROUTES from './ROUTES'
import { SEPARATORS } from '../constants'

export const getViewProductLink = (productId: string) =>
  `${WEBISTE_URL}${BROWSER_ROUTER_SUFFIX}${ROUTES.PRODUCTS}${SEPARATORS.PATH}${productId}` as const
