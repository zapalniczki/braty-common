export const LOG_COLORS = {
  GREEN: '\x1b[32m%s\x1b[0m' as const,
  RED: '\x1b[31m%s\x1b[0m' as const
}

export const PHOTOS_UPLOAD_PATHS = {
  output: './output' as const,
  molds: './molds' as const
}

export const FIREBASE_STORAGE_PATHS = {
  collections: 'collections' as const
}
