import { enum as zenum, TypeOf } from 'zod'

const country = zenum(['POLAND', 'UNITED KINGDOM', 'GERMANY'])
export type Country = TypeOf<typeof country>

export default country
