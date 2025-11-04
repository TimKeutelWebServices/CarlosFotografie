<template>
  <ImageArrayComponent :images="images.concat(images)" :allow-query-push="false" ignore-grid-span />
</template>

<script setup lang="ts">
import ImageArrayComponent from '~/components/images/array.vue'

const images = [
  { name: 'Landhausstil-Boudoir/bbe__62_2952_bearbeitet.jpg', orientation: 'p' },
  { name: 'Bridal-Boudoir/bbt_62_2413_bearbeitet.jpg', orientation: 'p' },
  { name: 'Aktfotografie/bba__62_5213_bearbeitet_sw_2.jpg', orientation: 'l' },
  { name: 'Klassische-Boudoir/eeb_IMG_1919_bearbeitet_3.jpg', orientation: 'p' },
  { name: 'Porträt/ffc_IMG_2948-bearbeitet_cut.jpg', orientation: 'p' },
  { name: 'Klassische-Boudoir/ffh_IMG_0025_bearbeitet.jpg', orientation: 'l' },
  { name: 'Landhausstil-Boudoir/fff__62_7935_bearbeitet.jpg', orientation: 'p' },
  { name: 'Porträt/hhb__62_4794_bearbeitet.jpg', orientation: 'l' },
  { name: 'Aktfotografie/ggj_IMG_8170_bearbeitet_2_zensiert.jpg', orientation: 'p' },
  { name: 'Bridal-Boudoir/bbe__62_1758_bearbeitet_cut.jpg', orientation: 'p' },
]
</script>
