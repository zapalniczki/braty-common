import { enum as zenum, TypeOf } from 'zod'

const language = zenum(['pl', 'en'])

export type Language = TypeOf<typeof language>

export default language
