<template>
  <header class="header" @click.stop="router.push('/')">
    <span class="header_left">
      <ImageComponent src="fulllogo_transparent_nobuffer.png" width="25px" sizes="50px" alt="Lingua Lucis Logo" />
      <p>
        {{ headerText }}
      </p>
    </span>
    <span class="header_right">
      <slot name="MenuContent" />
      <DesktopMenu v-if="!isMobile" :menu-items="menuItems" />

      <span class="header_right_social">
        <a href="https://api.whatsapp.com/send?phone=4915756900655" style="scale: 0.8;" aria-label="Link zu WhatsApp">
          <WhatsappIcon />
        </a>
        <a href="https://www.instagram.com/lingualucis/" aria-label="Link zu Instagram">
          <InstagramIcon />
        </a>
      </span>
      <span class="header_right">
        <button class="header_right_cta" @click.stop="router.push('/contact')">Kontakt</button>
        <div v-if="isMobile" class="header_right_menu">
          <MenuIcon @click.stop="isMenuOpen = !isMenuOpen" />
        </div>
      </span>
    </span>
  </header>
</template>

<script setup lang="ts">
import type { MenuItem } from '~/types/menuItem'
import MenuIcon from '~/components/icons/google/menu.vue'
import InstagramIcon from '~/components/icons/instagram.vue'
import WhatsappIcon from '~/components/icons/whatsapp.vue'
import ImageComponent from '~/components/images/base.vue'
import DesktopMenu from '~/components/menu/desktop.vue'

defineProps<{
  menuItems: Array<MenuItem>
  headerText: string
}>()

const isMenuOpen = defineModel<boolean>('isMenuOpen')
const { isMobile } = useDevice()

const router = useRouter()
</script>

<style lang="scss">
@use 'sass:color';

.header {
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: $space;
  height: $navHeight;
  background-color: $mainBackgroundColor;
  z-index: 14;
  user-select: none;

  &_left {
    display: flex;
    gap: $space;

    p {
      margin: auto 0;
      width: max-content;
      vertical-align: middle;
      white-space: nowrap;
      font-weight: 900;
      color: $darkFontColor;
      font-size: clamp(1rem, 6vw, 1.5rem);
    }

    img {
      box-shadow: none;
      border-radius: 0;
      scale: 1.5;
    }
  }

  &_right {
    position: static;
    position: relative;
    display: flex;
    flex-direction: row;
    gap: $space;
    height: 100%;
    z-index: 14;

    &_social {
      display: flex;
      gap: $space;

      a {
        display: flex;

        svg {
          margin: auto 0;
        }
      }
    }

    &_cta {
      cursor: pointer;
      margin: auto;
      padding: 0;
      height: 100%;
      width: 6rem;
      background-color: $detailColor;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
      font-weight: normal;

    }

    &_menu {
      display: none;
    }
  }

}

@media only screen and (max-width: $mobileThreshold) {
  .header {
    justify-content: end; // Supported afer Chrome 92

    &_left {
      p {
        display: none;
      }
    }

    &_right {
      z-index: 14;
      margin-left: auto; // Workaround for older Chrome Version

      &_menu {
        display: block;
      }
    }
  }
}
</style>
