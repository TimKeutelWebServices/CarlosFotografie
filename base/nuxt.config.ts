// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/seo",
    "@nuxtjs/device"
  ],
  runtimeConfig: {
    customCaCertPath: process.env.NUXT_CUSTOM_CA_CERT_PATH,
    public: {
      webApiUrl: process.env.NUXT_PUBLIC_WEB_API_URL,
      projectId: process.env.NUXT_PUBLIC_PROJECT_ID,
    },
  },
  // Configure to use the base project as a layer

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/sitemap.xml", "/robots.txt"],
    },
  },
  experimental: {
    componentIslands: true,
    inlineRouteRules: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "~/assets/styles/_global.scss" as *;`,
        },
      },
    },
  },
  site: {
    url: 'base.com'
  },
  eslint: {
    config: {
      stylistic: true,
      standalone: false,
    },
  },
  image: {
    format: ["webp"],
    provider: "cloudflare",
    cloudflare: {
      baseURL: "https://media.lingualucis.de/",
    },
    screens: {
      '4xs': 240,
      '3xs': 340,
      '2xs': 440,
      xs: 540,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    densities: [1],
  },
  fonts: {
    families: [
      {
        name: "Montserrat",
        provider: "local",
        src: "/montserrat-ms-400-normal.ttf",
        weight: 400,
        style: "normal",
      },
    ],
  },
});