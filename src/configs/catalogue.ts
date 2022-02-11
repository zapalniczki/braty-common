import { BRATY_NAME, Language } from '..'

export const CATALOGUE_TITLE: Record<Language, string> = {
  pl: 'Katalog produktów' as const,
  en: 'Products Catalogue' as const
}

export const CATALOGUE_SUBTITLE: Record<Language, string> = {
  pl: 'Zima 2021 | 22' as const,
  en: 'Winter 2021 | 22' as const
}

export const CATALOGUE_CAPTION: Record<Language, string> = {
  pl: 'Zapoznaj się z aktualną ofertą' as const,
  en: 'Browse our wholesale offer' as const
}

export const CATALOGUE_FEATURED_SUBTITLE: Record<Language, string> = {
  pl: 'Oferta specjalna' as const,
  en: 'Featured products' as const
}

export const CATALOGUE_REGULAR_SUBTITLE: Record<Language, string> = {
  pl: 'Oferta standardowa' as const,
  en: 'Regular products' as const
}

export const CATALOGUE_TILE_TITLE_PREFIX: Record<Language, string> = {
  pl: 'Zapalniczka ' as const,
  en: 'Lighter ' as const
}

export const CATALOGUE_PRODUCT_ICON_ONLY_LABEL = '-' as const

export const CATALOGUE_PRODUCT_NAME_FOR_ICON_ONLY: Record<Language, string> = {
  pl: 'Zapalniczki tylko z ikonami' as const,
  en: 'Zapalniczki tylko z ikonami' as const
}

export const CATALOGUE_TOC_TITLE = {
  pl: 'Spis treści' as const,
  en: 'Table of Contents' as const
}

export const CATALOGUE_PATHS = {
  OUTPUT: '/output'
}

export const getCatalogueOutputFilename = (language: Language) => {
  const title = CATALOGUE_TITLE[language]
  const subtitle = CATALOGUE_SUBTITLE[language].replace(' | ', ' ')
  const outputFileName = `${BRATY_NAME} ${title} ${subtitle} ${language}`

  return outputFileName
}
