import { remoteConfig } from '..'

const getTypeOfRemoteConfigKey = (query: string) => {
  const entries = getObjectEntries(remoteConfig._getCached().shape)
  const remoteConfigKeysWithTypes = entries.map(([key, value]) => ({
    key,
    type: value._def.typeName
  }))

  //   const thisKey = remoteConfigKeysWithTypes.find((key) => key.key === query)

  let thisKey
  for (let index = 0; index < remoteConfigKeysWithTypes.length; index++) {
    const currentKey = remoteConfigKeysWithTypes[index]

    if (currentKey.key === query) {
      thisKey = currentKey
      break
    }
  }

  if (!thisKey) {
    return undefined
  }

  return thisKey.type
}

export default getTypeOfRemoteConfigKey

const getObjectEntries = (obj: Record<string, any>) => {
  var ownProps = Object.keys(obj),
    i = ownProps.length,
    resArray = new Array(i)
  while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]]

  return resArray
}
