<template>
  <NuxtLayout>
    <Pricing :pricing="pricing" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import type { PricingModel } from '@base/types/pricingModel'

const pageName: string = 'Preise'

const title: string = `Carlos Kremm | ${pageName}`
const description: string = `ToDo`

const pricing: PricingModel = {
  base: {
    title: 'Basis Paket',
    imageUrl: '/images/pricing/base-package.jpg',
    isBest: 'false',
    isSale: 'true',
    marks: [
      'Mark 1',
      'Mark 2',
      'Mark 3',
    ],
  },
}

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
})
definePageMeta({
  keepalive: true,
  scrollToTop: false,
})
useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { id: `Home`, name: 'Home', item: '/' },
      { id: `Home_Preise`, name: 'Pricing', item: '/pricing' },
    ],
  }),
])
useRobotsRule({ index: true, follow: true })
</script>
