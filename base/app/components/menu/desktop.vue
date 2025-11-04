<template>
  <menu class="menu_desktop">
    <div v-for="(menuItem, i) in menuItems" :key="i" class="menu_desktop_item">
      <client-only>
        <NuxtLink
          v-if="menuItem.link" class="menu_desktop_item_link" external prefetch-on="interaction"
          :to="menuItem.link" @click.stop="$router.push(menuItem.link)"
        >
          <p>
            <component
              :is="menuIcons.getIcon(menuItem.iconComponent)"
              v-if="menuItem.iconComponent && menuIcons.getIcon(menuItem.iconComponent)"
            />
            {{ menuItem.title }}
          </p>
        </NuxtLink>
        <div v-if="menuItem.children" class="menu_desktop_item_link" @mouseenter="isChildOpen = menuItem.title">
          <p>
            <component
              :is="menuIcons.getIcon(menuItem.iconComponent)"
              v-if="menuItem.iconComponent && menuIcons.getIcon(menuItem.iconComponent)"
            />
            {{ menuItem.title }}
          </p>
        </div>
      </client-only>
      <div
        v-if="menuItem.children" class="menu_desktop_childs"
        :class="[{ menu_desktop_childs_active: isChildOpen === menuItem.title }]" @mouseleave="isChildOpen = undefined"
      >
        <MenuDesktop :menu-items="menuItem.children" is-child />
      </div>
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

const isChildOpen = ref<string | undefined>()
</script>

<style lang="scss" scoped>
.menu_desktop {
  display: flex;
  flex-wrap: wrap;
  gap: $space;
  margin: 0;
  z-index: 10;

  &_item {
    position: relative;
    display: flex;
    max-height: 100%;
    text-decoration: none;
    color: black;
    transition: $baseTransition;

    &_link,
    &_submenu {
      display: flex;
      flex-direction: row;
      justify-content: center;
      text-decoration: none;
      color: black;
      padding: 0 $space;

      p {
        display: flex;
        margin: auto 0;
        text-wrap: nowrap;

        svg {
          height: 1.25rem;
        }

        &::after {
          content: "";
          position: absolute;
          bottom: -$spaces;
          left: 50%;
          width: 0;
          height: 2.5px;
          background-color: $detailColor;
          border-radius: $spacel;
          transition: $baseTransition;
        }

        &:hover {
          &::after {
            width: 100%;
            left: 0;
          }
        }
      }
    }

    &_parent {
      display: flex;
      flex-direction: row;
      justify-content: center;
      text-decoration: none;
      color: black;
      padding: 0 $space;
    }

    .router-link-active {
      &::after {
        content: "";
        position: absolute;
        bottom: -$space;
        left: 0;
        width: 100%;
        height: 2.5px;
        border-radius: $space $space 0 0;
        background-color: $detailColor;
        transition: $baseTransition;
      }
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -$space;
      left: 0;
      width: 100%;
      height: 0;
      border-radius: $space $space 0 0;
      background-color: $detailColor;
      transition: $baseTransition;
      overflow: hidden;
    }
  }

  &_childs {
    position: absolute;
    top: $navHeight + $space;
    right: 0;
    display: flex;
    gap: $space;
    min-height: 0;
    width: 60vw;
    overflow: hidden;
    background-color: $mainBackgroundColor;
    border-radius: 0 0 $space $space;
    text-wrap: nowrap;
    padding: $spaces;
    transition: $baseTransition;
    opacity: 0;

    &_active {
      min-height: $navHeight;
      opacity: 1;
    }
  }
}
</style>
