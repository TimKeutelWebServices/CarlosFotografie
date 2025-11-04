import { prugeCached } from '../../../base/app/composables/cachedFetch'

export default defineEventHandler((event) => {
  try {
    const query = getQuery(event)
    const code = query.cachePassword
    const key = query.key?.toString() || ''

    const password = process.env.NUXT_CACHE_PASSWORD

    /*   if (code !== password) {
      return { success: false, message: 'Invalid password' }
      } */

    if (!key) {
      return { success: false, message: 'No key provided' }
    }
    prugeCached(key)
    return { success: true, message: `Purged with key: ${key}` }
  }
  catch (error: any) {
    throw createError({
      statusCode: 500,
      statusMessage: error,
    })
  }
})
