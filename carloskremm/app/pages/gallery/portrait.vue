<template>
  <NuxtLayout>
    <AreaEntry :gallery-item="galleryItem" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const pageName: string = 'Portrait'
const portfolioId: string = 'portrait'

const title: string = `Carlos Kremm | ${pageName}`
const description: string = `ToDo`

const galleryItem = {
  title: pageName,
  portfolioId,
  overview: [
    {
      title: 'Dein Moment – dein Ausdruck',
      text: 'Jeder Mensch trägt eine eigene Stimmung in sich – eine Präsenz, die nur in bestimmten Augenblicken sichtbar wird. In diesen Momenten entsteht etwas Echtes, das nicht inszeniert werden kann. Ehrlich, ungestellt und voller Gefühl – Portraits, die zeigen, wer du wirklich bist.',
      imageUrl: 'static/portfolio/couple/R62_0483.jpg',
    },
    {
      title: 'Ruhe. Tiefe. Persönlichkeit',
      text: 'Sanftes Licht, feine Nuancen und eine ruhige Atmosphäre lassen natürliche Portraits entstehen. Ein stiller Blick, eine kleine Bewegung – aus solchen Augenblicken wächst Authentizität. Bilder, die Persönlichkeit ausstrahlen, ohne dass dies erzwungen wirkt.',
      imageUrl: 'static/portfolio/couple/R62_0288.jpg',
    },
    {
      title: 'Bilder mit Seele',
      text: 'Portraits, die Geschichten erzählen – von Nähe, Stärke und leiser Verletzlichkeit. Durch gezielte Lichtführung und feinfühlige Bildgestaltung entsteht Tiefe und Gefühl. So entstehen Aufnahmen, die den Menschen in seiner Echtheit sichtbar machen.',
      imageUrl: 'static/portfolio/couple/R62_0394.jpg',
    },
  ],
}

useGalleryMeta(portfolioId, title, description)
</script>
