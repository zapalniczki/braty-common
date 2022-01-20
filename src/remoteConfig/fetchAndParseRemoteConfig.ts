import {
  getRemoteConfig,
  getAll,
  fetchAndActivate
} from 'firebase/remote-config'
import { getTypeOfRemoteConfigKey } from '.'
import { getObjectEntries } from '../helpers'
import { RemoteConfig, remoteConfig as remoteConfigSchema } from '..'
import { ZodFirstPartyTypeKind } from 'zod'

const fetchAndParseRemoteConfig = async (
  isDev: boolean
): Promise<RemoteConfig> => {
  const remoteConfig = getRemoteConfig()
  remoteConfig.settings = {
    minimumFetchIntervalMillis: isDev ? 2000 : 43200000,
    fetchTimeoutMillis: 6000
  }

  await fetchAndActivate(remoteConfig)

  const rawValues = getAll(remoteConfig)
  const values = Object.fromEntries(
    getObjectEntries(rawValues).map(([key, value]) => {
      const valueType = getTypeOfRemoteConfigKey(key)

      let valueParsed
      if (valueType === ZodFirstPartyTypeKind.ZodNumber) {
        valueParsed = value.asNumber()
      } else if (valueType === ZodFirstPartyTypeKind.ZodBoolean) {
        valueParsed = value.asBoolean()
      } else {
        valueParsed = value.asString()
      }

      return [key, valueParsed]
    })
  )

  const valuesParsed = remoteConfigSchema.safeParse(values)

  if (valuesParsed.success) {
    return valuesParsed.data
  } else {
    throw new Error(valuesParsed.error.toString())
  }
}

export default fetchAndParseRemoteConfig
