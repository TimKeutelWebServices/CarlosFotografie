<template>
  <NuxtLayout>
    <AreaEntry :gallery-item="galleryItem" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const pageName: string = 'Deine Location'
const portfolioId: string = 'location'

const title: string = `Carlos Kremm | ${pageName}`
const description: string = `ToDo`

const galleryItem = {
  title: pageName,
  portfolioId,
  overview: [
    {
      title: 'Räume mit Charakter',
      text: 'Jeder Ort hat seine eigene Stimmung, seinen Charme, seine Geschichte. Ob Ferienhof, Restaurant, Vereinsheim oder Hotel – Räume sprechen, wenn man sie lässt. Mit gezieltem Blick für Atmosphäre entstehen Bilder, die den Charakter eines Ortes sichtbar machen.',
      imageUrl: 'static/portfolio/couple/R62_0483.jpg',
    },
    {
      title: 'Architektur trifft Emotion',
      text: 'Gute Raumfotografie zeigt nicht nur Wände, sondern Stimmungen. Licht, Perspektive und Struktur verbinden sich zu einem harmonischen Gesamtbild. Aber auch der Blick für feine Details darf nicht fehlen. So wird der Ort nicht einfach dokumentiert, sondern fühlbar gemacht.',
      imageUrl: 'static/portfolio/couple/R62_0288.jpg',
    },
    {
      title: 'Präsentation mit Seele',
      text: 'Ob für Webseiten, Broschüren oder Werbematerialien – authentische Bilder schaffen Vertrauen. Sie laden ein, den Raum zu erleben - schon bevor man ihn betritt. Deine Location wird so gebührend in Szene gesetzt – professionell, ästhetisch und atmosphärisch.',
      imageUrl: 'static/portfolio/couple/R62_0394.jpg',
    },
  ],
}

useGalleryMeta(portfolioId, title, description)
</script>
