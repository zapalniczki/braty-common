export const COREL_PATHS = {
  CONFIG: '/src/config.ts' as const,
  CONSTANTS: '/src/constants.ts' as const,
  ICONS: '/icons' as const,
  INDEX: '/src/index.ts' as const,
  OUTPUT: '/output' as const,
  TYPES: '/types' as const
}

export const COREL_MARGINS_BETWEEN_ICON_AND_TEXT = {
  SMALL: 0.05 as const,
  LARGE: 0.15 as const
}

export const COREL_FONTS: Record<CorelFont, CorelFontFamily> = {
  STANDARD: 'Kaushan Script' as const,
  HANDWRITE: 'Radicalis' as const
}

export const COREL_TEXT_LAYER_NAME = 'text_layer' as const
export const COREL_ICON_LAYER_NAME = 'icon_layer' as const

export const COREL_LABEL_PREFIX = 'I' as const

export const COREL_ICON_LAYER_INITIAL_NAME = 'Warstwa 1' as const

export type CorelIcon = 'HEART' | 'BOAT'

export type Unicode = number[]

export type CorelFontFamily = 'Kaushan Script' | 'Batang' | 'Radicalis'

export type CorelFont = 'STANDARD' | 'HANDWRITE'
