import { enum as zenum, TypeOf } from 'zod'

const moldStatus = zenum(['IN_PROGRESS', 'DONE', 'UNDONE'])

export const MOLD_STATUSES = moldStatus.options
export type MoldStatus = TypeOf<typeof moldStatus>

export default moldStatus
