import { WEBISTE_URL } from './index'
import ROUTES from './routes'
import { SEPARATORS } from '../constants'

export const getViewProductLink = (productId: string) =>
  `${WEBISTE_URL}${ROUTES.viewProduct}${SEPARATORS.PATH}${productId}` as const
