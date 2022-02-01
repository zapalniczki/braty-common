import { Unicode } from '..'

const getUnicodeFromString = (str: string): Unicode => {
  const letters = str.split('')
  const unicodes = letters.map((letter) => letter.charCodeAt(0))

  return unicodes
}

export default getUnicodeFromString
