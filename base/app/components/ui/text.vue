<template>
  <div class="area">
    <slot />
    <textarea :id="id" v-model="model" rows="4" :disabled="disabled" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  id?: string
  disabled?: boolean

}

defineProps<Props>()

const model = defineModel<string>()
</script>

<style lang="scss" scoped>
.area {
    width: 100%;

    textarea {
        box-sizing: border-box;
        padding: $space;
        height: 150px;
        border: none;
        background-color: $mainBackgroundColor;
        border-radius: $spaces;
        width: 100%;
        resize: none;
        font-family: 'Montserrat', sans-serif;
    }

}
</style>
