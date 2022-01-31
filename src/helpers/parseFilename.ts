import { SEPARATORS } from '..'

function parseFilename(filename: string) {
  const parts = filename.split(SEPARATORS.FILENAME)
  const extension = filename.split(SEPARATORS.DOT)[1]

  const keys = []
  for (let index = 0; index < parts.length; index++) {
    const part = parts[index]
    const partParts = part.split(SEPARATORS.FILENAME_PAIR)
    const partObject = {
      key: partParts[0],
      value: partParts[1]
    }

    keys.push(partObject)
  }

  let collection
  let icon
  let label
  let size

  for (let index = 0; index < keys.length; index++) {
    const key = keys[index]

    if (key.key === 'collection') {
      collection = key.value
    } else if (key.key === 'label') {
      label = key.value
    } else if (key.key === 'icon') {
      icon = key.value
    } else if (key.key === 'size') {
      size = key.value
    }
  }

  return {
    collection,
    icon,
    label,
    size,
    extension
  }
}

export default parseFilename
