import { string, TypeOf } from 'zod'
import product from './product'
import { imageSize } from '../dbEnums'
import tableBase from './tableBase'

const image = tableBase.extend({
  src: string(),
  size: imageSize,
  product_id: product.shape.id
})

export type Image = TypeOf<typeof image>

export default image
