<template>
  <NuxtPage :menu-items="menuItems" :header-text="headerText" />
</template>

<script setup lang="ts">
import type { MenuItem } from '@base/types/menuItem'

const headerText = 'Carlos Kremm'

const menuItems: Array<MenuItem> = [
  {
    title: 'Home',
    iconComponent: 'Home',
    link: '/',
  },
  {
    title: 'Portfolio',
    iconComponent: 'CameraRoll',
    children: [
      {
        title: 'Portrait',
        iconComponent: 'Portrait',
        link: '/gallery/portrait',
      },
      {
        title: 'Babybauch',
        iconComponent: 'Baby',
        link: '/gallery/baby',
      },
      {
        title: 'Familie ',
        iconComponent: 'Family',
        link: '/gallery/family',
      },
      {
        title: 'Paare',
        iconComponent: 'Couple',
        link: '/gallery/couple',
      },
      {
        title: 'Haustiere',
        iconComponent: 'Pets',
        link: '/gallery/pets',
      },
      {
        title: 'Automobile',
        iconComponent: 'Car',
        link: '/gallery/cars',
      },
      {
        title: 'Videografie',
        iconComponent: 'Video',
        link: '/gallery/video',
      },
      {
        title: 'Businessportraits',
        iconComponent: 'Business',
        link: '/gallery/business',
      },
      {
        title: 'Deine Location',
        iconComponent: 'Location',
        link: '/gallery/location',
      },
    ],
  },
  {
    title: 'Preise',
    iconComponent: 'Price',
    link: '/pricing',
  },
]
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html,
body,
#app {
  height: 100vh;
  font-family: 'Montserrat', sans-serif;
  font-display: block;
}

svg {
  fill: $detailColor;
  height: 100%;
  width: 2rem;
}

::-webkit-scrollbar {
  display: flex;
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-button {
  opacity: 0;
}
::-webkit-scrollbar-track {
  background-color: transparent;
  opacity: 0;
}
::-webkit-scrollbar-thumb:vertical {
  background-color: $mainBackgroundColor;
  border-radius: $spaces 0 0 $spaces;
  border: 1px $detailColor solid;
  border-right: none;
}

::-webkit-scrollbar-thumb:horizontal {
  background-color: $mainBackgroundColor;
  border-radius: $spaces $spaces 0 0 ;
  border: 1px $detailColor solid;
  border-bottom: none;

}
</style>
