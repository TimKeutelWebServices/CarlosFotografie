<template>
  <div class="button">
    <button :disabled="disabled" @click="emits('onClick')">
      <slot />
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  type?: 'none'
  disabled?: boolean
}

defineProps<Props>()
const emits = defineEmits(['onClick'])
</script>

<style lang="scss" scoped>
.button {
    display: flex;
    flex-direction: column;
    gap: $spaces;
    width: 100%;

    button {
      cursor: pointer;
        box-sizing: border-box;
        padding: 0 $space;
        line-height: $spacel;
        border: none;
        background-color: $mainBackgroundColor;
        border-radius: $spaces;
        width: 100%;
        font-size: medium;
    }
}
</style>
