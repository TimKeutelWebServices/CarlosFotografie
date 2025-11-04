<template>
  <div>
    <h1>fetchcached Composable debugscreen</h1>

    <span>runtimeConfig:
      <pre> {{ runtimeConfig.public }}</pre>
    </span>
    <span>url:
      <pre> {{ url }}</pre>
    </span>

    <span>images:
      <pre> {{ images }}</pre>
    </span>
  </div>
</template>

<script setup lang="ts">
import type { ImageModel } from '~/models/imageMode'

const runtimeConfig = useRuntimeConfig()
const id = 'studio'
const key = ref(`images-${id}`)
const url = ref(`${runtimeConfig.public.webApiUrl}/${runtimeConfig.public.projectId}/Public/Portfolio`)

await useCachedFetch<Array<ImageModel>>(key.value, url.value, { query: { path: id } })

const { data: images } = await useAsyncData<Array<ImageModel>>(
  key.value,
  () => useCachedFetch<Array<ImageModel>>(key.value, url.value, { query: { path: id } }),
  { server: true },
)
</script>
