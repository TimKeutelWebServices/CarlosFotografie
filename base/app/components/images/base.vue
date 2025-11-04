<template>
  <a v-if="customLink || allowQueryPush" class="base" @click.prevent.stop="pushQuery">
    <NuxtImg
      :src="`media/${src}`" provider="cloudflare" fit="contain" format="webp" quality="90" :alt="alt"
      :sizes="sizes" :loading="lazyLoading ? 'lazy' : 'eager'" densities="x1" :width="width" :height="height"
      @oncontextmenu="false"
    />
  </a>
  <NuxtImg
    v-else
    :src="`media/${src}`" provider="cloudflare" fit="contain" format="webp" quality="90" :alt="alt"
    :sizes="sizes" :loading="lazyLoading ? 'lazy' : 'eager'" densities="x1" :width="width" :height="height"
    @oncontextmenu="false"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string
  alt: string
  sizes?: string
  customLink?: string
  placeholder?: {
    type: boolean
    default: false
  }
  lazyLoading?: boolean
  allowQueryPush?: boolean
  width?: string
  height?: string
}>()

const router = useRouter()

function pushQuery() {
  if (props.allowQueryPush)
    router.push({ query: { image: props.src } })
  else
    router.push(props.customLink ? props.customLink : ``)
}
</script>

<style lang="scss">
.base {
  user-select: none;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  height: 100%;

  img {
    object-fit: cover;
    border-radius: 10px;
    pointer-events: none;
  }
}
</style>
