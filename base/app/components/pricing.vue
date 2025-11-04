<template>
  <h1>ToDo</h1>
</template>

<script lang="ts" setup>
import type { PricingModel } from '~/types/pricingModel'

defineProps<{
  pricing: PricingModel
}>()
</script>
