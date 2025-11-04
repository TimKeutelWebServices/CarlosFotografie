<template>
  <div class="input" :class="{ input_large: height }">
    <slot />
    <input :id="id" v-model="model" :type="type ?? 'text'" :autocomplete="autocomplete" :height="height" :disabled="disabled">
  </div>
</template>

<script setup lang="ts">
interface Props {
  autocomplete?: 'given-name' | 'family-name' | 'email' | 'tel' | 'off'
  type?: 'text' | 'email' | 'tel' | 'checkbox'
  id?: string
  height?: 'medium' | 'large'
  disabled?: boolean

}

defineProps<Props>()

const model = defineModel<string>()
</script>

<style lang="scss" scoped>
.input {
    display: flex;
    flex-direction: column;
    gap: $spaces;
    width: 100%;

    input {
        box-sizing: border-box;
        padding: 0 $space;
        line-height: $spacel;
        border: none;
        background-color: $mainBackgroundColor;
        border-radius: $spaces;
        width: 100%;
        font-size: medium;
    }

    &_large {
        input {
            line-height: $spacexl;
            font-size: 1.1rem;
        }
    }
}
</style>
