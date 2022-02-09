import { SCRIPTS } from '..'

const OUTPUT_BASE_PATH =
  `C:/Users/Przemek Rychlewicz/AppData/Roaming/Adobe/InDesign/Version 16.0/en_GB/Scripts/Scripts Panel/${SCRIPTS.CATALOGUE}` as const

const OUTPUT_IMAGES_FOLDER = `/src/externalAssets` as const
const OUTPUT_PRODUCTS_FILE_PATH = `/index.ts` as const
const OUTPUT_CONSTANTS_FILE_PATH = `/src/constants.ts` as const

export const CATALOGUE_PREPARE_PATHS = {
  OUTPUT_BASE_PATH,
  OUTPUT_IMAGES_FOLDER,
  OUTPUT_PRODUCTS_FILE_PATH,
  OUTPUT_CONSTANTS_FILE_PATH
}
