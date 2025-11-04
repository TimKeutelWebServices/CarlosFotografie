<template>
  <nuxt-link to="/contact">
    <UiCta label="Unverbindlich Anfragen" @on-click="router.push('/contact')" />
  </nuxt-link>
</template>

<script lang="ts" setup>
const router = useRouter()
</script>
