<template>
  <div class="layout">
    <Header v-model:is-menu-open="isMenuOpen" :menu-items="menuItems" :header-text="headerText" />
    <main class="layout_main">
      <div class="layout_main_content">
        <div class="layout_main_content_inner">
          <slot />
        </div>
      </div>
      <MenuMobile v-if="isMobile" v-model="isMenuOpen" :menu-items="menuItems" />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import type { MenuItem } from '~/types/menuItem'
import { ref } from 'vue'

defineProps<{
  menuItems: Array<MenuItem>
  headerText: string
}>()

const { isMobile } = useDevice()

const isMenuOpen = ref(false)
</script>

<style lang="scss" scoped>
.layout {
  position: relative;
  height: 100dvh !important;
  background-color: $mainBackgroundColor;

  &_main {
    display: flex;
    overflow-x: hidden;
    height: 100%;
    margin: 0 $space;

    &_content {
      margin: $navHeight_double 0;
      max-height: calc(100dvh - $navHeight_quatruple);
      padding: 0;
      box-sizing: border-box;
      overflow-x: hidden;
      overflow-y: auto;
      background-color: white;
      transition: $baseTransition;
      border-radius: $space;

      &_inner {
        padding-top: $space;
        width: calc(100dvw - $spacel);
        max-width: 100dvw;
      }
    }
  }
}
</style>
