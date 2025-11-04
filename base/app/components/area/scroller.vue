<template>
  <div class="scroller">
    <template v-for="image in images" :key="image.name">
      <template v-if="image.orientation === 'l'">
        <NuxtImg
          class="scroller_image scroller_landscape" :src="`media/${image.name}`" provider="cloudflare"
          fit="cover" format="webp" quality="80" :alt="image.alt || ''" width="416" height="316" sizes="416px"
          loading="lazy" densities="x1" style="grid-column: span 2; grid-row: span 2;" @oncontextmenu="false"
        />
      </template>
      <template v-else>
        <NuxtImg
          class="scroller_image  scroller_portrait" :src="`media/${image.name}`" provider="cloudflare"
          fit="cover" format="webp" quality="80" :alt="image.alt || ''" width="200" height="316" sizes="200px"
          loading="lazy" densities="x1" style="grid-column: span 1; grid-row: span 2;" @oncontextmenu="false"
        />
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { ImageModel } from '~/types/imageModel'
import { useAsyncData, useRuntimeConfig } from 'nuxt/app'
import { useCachedFetch } from '~/composables/cachedFetch'

const props = defineProps({
  portfolioId: String,
})

const runtimeConfig = useRuntimeConfig()
const { data: images } = await useAsyncData<Array<ImageModel>>(
  `${props.portfolioId}`,
  () => {
    console.debug(`Loading images for portfolioId: ${props.portfolioId}`)
    return useCachedFetch<Array<ImageModel>>(`${props.portfolioId}`, `${runtimeConfig.public.webApiUrl}/${runtimeConfig.public.projectId}/Public/Portfolio`, { query: { path: props.portfolioId } })
  },
  {
    server: true,
    default: () => [],
  },

)
</script>

<style lang="scss" scoped>
.scroller {
  user-select: none;
  display: grid;
  grid-auto-flow: column dense;
  justify-content: start;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-template-rows: repeat(4, 150px);
  gap: $space;
  height: 100%;
  margin: $space auto;
  width: max-content;

  &_image {
    border-radius: $space;
  }
}
</style>
