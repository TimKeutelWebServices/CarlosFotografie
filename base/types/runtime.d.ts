import 'nuxt/schema'

declare module 'nuxt/schema' {
  interface RuntimeConfig {
    customCaCertPath?: string
  }

  interface PublicRuntimeConfig {
    webApiUrl: string
    projectId: string
  }
}

export {}
