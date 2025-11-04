// server/utils/cachedFetch.ts
import { $fetch } from 'ofetch'

export interface CacheEntry<T> {
  data: T
  url: URL
  options: any
  expires: number
}

declare global {
  // eslint-disable-next-line vars-on-top
  var __apiCache: Record<string, CacheEntry<any>> | undefined
}

export async function prugeCached(key: string): Promise<void> {
  const originalKey = key
  try {
    key = key.toLocaleLowerCase()
    console.log('[cachedFetch] prugeCached invoked', { originalKey, normalizedKey: key })

    globalThis.__apiCache = globalThis.__apiCache || {}
    console.log('[cachedFetch] available cache keys before purge', Object.keys(globalThis.__apiCache))

    const cacheData = globalThis.__apiCache[key]
    if (cacheData) {
      console.log('[cachedFetch] removing cache entry', {
        key,
        expiresAt: new Date(cacheData.expires).toISOString(),
        url: cacheData.url?.toString(),
      })
    }
    else {
      console.log('[cachedFetch] no cache entry found to purge', { key })
    }

    delete globalThis.__apiCache[key]

    if (cacheData?.url && cacheData?.expires) {
      console.log('[cachedFetch] rebuilding cache entry', { key })
      await useCachedFetch(key, cacheData.url, cacheData.options, cacheData.expires)
    }
  }
  catch (error) {
    console.error('Error in prugeCached:', error)
  }
}

export async function useCachedFetch<T>(
  key: string,
  url: URL | string,
  options: any = {},
  ttl = 86_400_000, // 1 day
): Promise<T> {
  try {
    key = key.toLocaleLowerCase()
    console.log('[cachedFetch] useCachedFetch invoked', { key, hasCache: !!globalThis.__apiCache?.[key] })

    globalThis.__apiCache = globalThis.__apiCache || {}
    const now = Date.now()
    const entry = globalThis.__apiCache[key]

    if (entry && entry.expires > now) {
      console.log('[cachedFetch] cache hit', { key, expiresAt: new Date(entry.expires).toISOString() })
      return entry.data as T
    }

    console.log('[cachedFetch] cache miss, fetching data', {
      key,
      url: url instanceof URL ? url.toString() : url,
      ttl,
    })

    const data = await $fetch<T>(url.toString(), options)
    globalThis.__apiCache[key] = {
      data,
      url: new URL(url),
      options,
      expires: now + ttl,
    }

    const populatedEntry = globalThis.__apiCache[key]
    console.log('[cachedFetch] cache populated', {
      key,
      expiresAt: populatedEntry ? new Date(populatedEntry.expires).toISOString() : null,
      cachedKeys: Object.keys(globalThis.__apiCache),
    })

    for (const k in globalThis.__apiCache) {
      const candidate = globalThis.__apiCache[k]
      if (candidate && candidate.expires <= now) {
        console.log('[cachedFetch] removing expired cache entry', {
          key: k,
          expiredAt: new Date(candidate.expires).toISOString(),
        })
        delete globalThis.__apiCache[k]
      }
    }

    return data
  }
  catch (error) {
    console.error('Error in cachedFetch:', { key, error })
    throw error // Re-throw the error after logging it
  }
}
