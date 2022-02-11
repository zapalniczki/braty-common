import { Language, language as languageSchema } from '..'

const getLanguageEnv = () => {
  let language: Language = 'pl'

  if (process.env.LANGUAGE) {
    language = languageSchema.parse(process.env.LANGUAGE)
  }

  return language
}

export default getLanguageEnv
