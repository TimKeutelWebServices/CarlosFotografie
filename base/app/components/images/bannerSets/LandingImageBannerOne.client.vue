<template>
  <ImageArrayComponent :images="images.concat(images)" :allow-query-push="false" ignore-grid-span />
</template>

<script setup lang="ts">
import ImageArrayComponent from '~/components/images/array.vue'

const images = [
  { name: 'Landhausstil-Boudoir/bba__62_3069_bearbeitet.jpg', orientation: 'p' },
  { name: 'Porträt/hhb__62_4794_bearbeitet.jpg', orientation: 'l' },
  { name: 'Aktfotografie/ggg_IMG_5174_bearbeitet_zensiert.jpg', orientation: 'p' },
  { name: 'Klassische-Boudoir/aad_IMG_3510_bearbeitet.jpg', orientation: 'p' },
  { name: 'Bridal-Boudoir/aac__62_0695_bearbeitet.jpg', orientation: 'l' },
  { name: 'Aktfotografie/hha_R62_1052_bearbeitet.jpg', orientation: 'l' },
  { name: 'Porträt/ffk__62_7450_bearbeitet_mit_Staub_und_Licht.jpg', orientation: 'p' },
  { name: 'Landhausstil-Boudoir/ddb__62_6136_bearbeitet_Staub_und_Licht_zensiert.jpg', orientation: 'p' },
  { name: 'Klassische-Boudoir/bbg_IMG_6007_bearbeitet.jpg', orientation: 'p' },
  { name: 'Bridal-Boudoir/bbh__62_2455_bearbeitet.jpg', orientation: 'l' },
]
</script>
