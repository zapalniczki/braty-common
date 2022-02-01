import { Unicode } from '..'

function getTextFromUnicode(unicode: Unicode): string {
  const len = unicode.length
  const characters = []

  for (let index = 0; index < len; index++) {
    const code = unicode[index]
    const char = String.fromCharCode(code)

    characters.push(char)
  }

  const str = characters.join('')

  return str
}

export default getTextFromUnicode
