<template>
  <footer>
    <div class="layout_footer akzentBox footer">
      <span class="footer_left">
        <p>© {{ currentYear }} Lingua Lucis</p>
        <NuxtLink to="/imprint" no-prefetch>Impressum</NuxtLink>
        <NuxtLink to="/privacypolicy" no-prefetch>Datenschutz</NuxtLink>
      </span>
      <span class="footer_right">
        <a href="https://api.whatsapp.com/send?phone=4915756900655" style="scale: 0.8;" aria-label="Link zu WhatsApp">
          <WhatsappIcon />
        </a>
        <a href="https://www.instagram.com/lingualucis/" aria-label="Link zu Instagram">
          <InstagramIcon />
        </a>
      </span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import InstagramIcon from '~/components/icons/instagram.vue'
import WhatsappIcon from '~/components/icons/whatsapp.vue'

const currentYear = new Date().getFullYear()
</script>

<style lang="scss">
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: $space;
  height: $navHeight;

  &_left {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: $space;
    height: 100%;

    a,
    p {
      text-decoration: none;
      color: $detailTextColor;
      margin: auto 0;
      width: max-content;
      font-size: 0.75rem;
    }
  }

  &_right {
    display: flex;
    flex-direction: row;
    gap: $space;
    height: 100%;

    p {
      margin: auto 0;
      width: max-content;
      font-weight: 900;
      font-size: 1.5rem;
    }
  }
}
</style>
