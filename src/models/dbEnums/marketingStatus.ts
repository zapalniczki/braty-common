import { enum as zenum, TypeOf } from 'zod'

export const marketingStatus = zenum([
  'TODO',
  'UNANSWERED',
  'INTERESTED',
  'REJECTED'
])

export type MarketingStatus = TypeOf<typeof marketingStatus>

export default marketingStatus
