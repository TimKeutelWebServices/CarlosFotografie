<template>
  <menu
    class="menu_mobile"
    :class="[{ menu_mobile_active: isMenuOpen }, { menu_mobile_isChild: isChild }, { menu_mobile_isChildActive: isChildOpen.length > 0 }]"
  >
    <div
      v-for="(menuItem, index) in menuItems" :key="index" class="menu_mobile_item"
      :class="[{ menu_mobile_item_isChild: isChild }]"
    >
      <div v-if="menuItem.children" class="menu_mobile_container">
        <div class="menu_mobile_item_link" @click="toggleChild(menuItem.title)">
          <component
            :is="menuIcons.getIcon(menuItem.iconComponent)"
            v-if="menuItem.iconComponent && menuIcons.getIcon(menuItem.iconComponent)"
          />
          <p>{{ menuItem.title }}</p>
        </div>
        <MenuMobile v-if="isChildOpen.some(c => c === menuItem.title)" :menu-items="menuItem.children" is-child />
      </div>
      <template v-else>
        <NuxtLink class="menu_mobile_item_link" no-prefetch external :to="menuItem.link">
          <component
            :is="menuIcons.getIcon(menuItem.iconComponent)"
            v-if="menuItem.iconComponent && menuIcons.getIcon(menuItem.iconComponent)"
          />
          <p>{{ menuItem.title }}</p>
        </NuxtLink>
      </template>
    </div>
  </menu>
</template>

<script setup lang="ts">
import type { MenuItem } from '~/types/menuItem'

defineProps<{
  menuItems: Array<MenuItem>
  isChild?: boolean
}>()

const menuIcons = useMenuIcon()

const isMenuOpen = defineModel<boolean>()

const isChildOpen = ref<string[]>([])

function toggleChild(title: string) {
  if (isChildOpen.value.includes(title)) {
    isChildOpen.value = isChildOpen.value.filter(c => c !== title)
  }
  else {
    isChildOpen.value.push(title)
  }
}
</script>

<style lang="scss" scoped>
.menu_mobile {
  top: $navHeight_double;
  display: flex;
  flex-direction: column;
  gap: $space;
  width: 0;
  padding: $navHeight_double 0;
  transition: $baseTransition;
  margin: 0;
  transform: translateX($spaces);

  &_active {
    width: 500px;
  }

  &_container {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: $space;
  }

  &_item {
    position: relative;
    display: flex;
    min-height: 50px;
    width: 100%;
    text-decoration: none;
    color: black;
    border-radius: 0;
    white-space: nowrap;

    &_link,
    &_submenu {
      display: flex;
      flex-direction: row;
      padding: 0 $space;
      margin: 0 $space;
      text-decoration: none;
      color: black;
      width: auto;

      p {
        margin: auto 0;
        width: 100%;
        text-align: center;
      }
    }

    &_isChild {
      margin-top: 0 !important;
      margin-left: $spacel;
    }

    &:first-child {
      margin-top: $space;
    }

    .router-link-active {
      border-top: 1px solid $darkFontColor;
      border-bottom: 1px solid $darkFontColor;
      border-radius: $spaces;
    }

    a {
      margin: 0 $space;
      width: 100%;
    }
  }

  &_isChild {
    transform: none;
    width: 100%;
    padding: 0;
  }
}
</style>
