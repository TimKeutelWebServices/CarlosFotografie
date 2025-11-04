<template>
  <button class="ctaButton" @click="console.log('hi')">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  label: string
}>()

const emits = defineEmits<{
  (e: 'onClick'): void
}>()
</script>

<style lang="scss">
.ctaButton {
  padding: $spaces;
  height: 100%;
  width: min(100%, 250px);
  background-color: $detailColor;
  border: none;
  border-radius: $spaces;
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
}
</style>
