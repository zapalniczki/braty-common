import { object, string } from 'zod'

const international = object({
  label_pl: string(),
  label_en: string()
})

export default international
