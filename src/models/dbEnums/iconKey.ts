import { enum as zenum, TypeOf } from 'zod'

const iconKey = zenum([
  'PKiN',
  'HEART_2022',
  'DOUBLE_HEART',
  'ARROW_BELOW',
  'CHRISTMAS_TREE_STRIPES',
  'CHRISTMAS_TREE_STAR',
  'CHRISTMAS_TREE_PATTERN',
  'BALLOONS',
  'FIREWORKS',
  'SANTA_FACE',
  'CHRISTMAS_TREE',
  'SHIP',
  'WARSAW_MERMAID',
  'BOAT2',
  'HEART'
])

export type IconKey = TypeOf<typeof iconKey>

export default iconKey
