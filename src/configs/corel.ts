export const COREL_PATHS = {
  CONFIG_PATH: '/src/config.ts' as const,
  CONSTANTS_PATH: '/src/constants.ts' as const,
  ICONS: '/icons' as const,
  OUTPUT: '/output' as const
}

export const COREL_MARGINS_BETWEEN_ICON_AND_TEXT = {
  SMALL: 0.05,
  LARGE: 0.15
}

export const COREL_FONTS: Record<CorelFont, CorelFontFamily> = {
  STANDARD: 'Kaushan Script'
}

export const COREL_TEXT_LAYER_NAME = 'text_layer'
export const COREL_ICON_LAYER_NAME = 'icon_layer'

export const COREL_LABEL_PREFIX = 'I'

export const COREL_ICON_LAYER_INITIAL_NAME = 'Warstwa 1'

export type CorelIcon = 'HEART' | 'BOAT'

export type Unicode = number[]

export type CorelFontFamily = 'Kaushan Script' | 'Batang'

export type CorelFont = 'STANDARD'
