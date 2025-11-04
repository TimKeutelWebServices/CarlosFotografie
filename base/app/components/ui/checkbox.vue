<template>
  <div class="checkbox">
    <input v-model="model" type="checkbox">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  type?: 'none'
}

defineProps<Props>()
const model = defineModel<boolean>()
</script>

<style lang="scss" scoped>
.checkbox {
    display: flex;
    flex-direction: row;
    gap: $spaces;
    width: 100%;

    input {
        box-sizing: border-box;
        padding: 0 $space;
        line-height: $spacel;
        border: none;
        background-color: $mainBackgroundColor;
        border-radius: $spaces;
        width: min-content;
        font-size: medium;
    }
}
</style>
