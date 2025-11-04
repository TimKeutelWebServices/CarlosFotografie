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
    "@nuxtjs/device",
    "@nuxtjs/critters"
  ],
  critters: {
    config: {
      preload: 'swap',
    },
  },
  app: {
    head: {
      link: [
        { rel: 'preload', href: '/_nuxt/base.css', as: 'style' },
        { rel: 'preload', href: '/_nuxt/entry.css', as: 'style' },
        { rel: 'preconnect', href: 'https://media.carloskremm.de' },
        //{ rel: 'preconnect', href: 'https://blogmaster-api.mangoflower-9c27682b.germanywestcentral.azurecontainerapps.io' },
      ]
    }
  },
  runtimeConfig: {
    public: {
      webApiUrl: process.env.NUXT_PUBLIC_WEB_API_URL,
      projectId: process.env.NUXT_PUBLIC_PROJECT_ID,
    },
  },
  // Configure to use the base project as a layer
  extends: ["../base"],
  alias: {
    "@base": "../../base/app"
  },
  vite: {
    server: {
      watch: {
        ignored: ["!../base/**"]
      }
    }
  },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: [
        "/sitemap.xml",
        "/robots.txt",
        "/",
        "gallery/couple"],
      ignore: [
        "/gallery",        // ignore the base gallery path
        "/gallery/**",     // ignore all nested gallery routes
      ],
    },
    routeRules: {
      "/gallery/**": { ssr: true, prerender: false },
    },
  },
  site: {
    url: "carloskremm.de",
    name: "Carlos Kremm",
    title: "Carlos Kremm",
  },
  sitemap: {
    exclude: ["/inprint"],
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
          @use "@/assets/styles/_global.scss" as *;`,
        },
      },
    },
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
      baseURL: "https://media.carloskremm.de/",
    },
    screens: {
      xs: 320,
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