<template>
  <NuxtLayout>
    <AreaEntry :gallery-item="galleryItem" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const pageName: string = 'Haustiere'
const portfolioId: string = 'pets'

const title: string = `Carlos Kremm | ${pageName}`
const description: string = `ToDo`

const galleryItem = {
  title: pageName,
  portfolioId,
  overview: [
    {
      title: 'Seelengefährten',
      text: 'Tiere sind mehr als Begleiter auf Zeit – sie sind Familie, Freunde, Herzenswesen. Ihr Charakter, ihre Energie, ihr stilles Vertrauen verdienen echte Aufmerksamkeit. Fotos, die ihre Persönlichkeit zeigen, halten diese Verbindung lebendig, machen unsere Seelenverwandten unvergessen.',
      imageUrl: 'static/portfolio/couple/R62_0483.jpg',
    },
    {
      title: 'Mit Geduld und Herz',
      text: 'Jedes Tier hat sein eigenes Tempo, seine Stimmung, seine Sprache. Mit Ruhe, Einfühlungsvermögen und Liebe entsteht Raum für natürliche Momente. So zeigen die Bilder das Tier, wie es wirklich ist – frei und unverstellt.',
      imageUrl: 'static/portfolio/couple/R62_0288.jpg',
    },
    {
      title: 'Zwischen Mensch und Tier',
      text: 'Oft genügt ein Blick, eine Bewegung, ein stilles Verstehen. Diese Beziehung wird sichtbar, wenn vom Fotografen der nötige Raum eingeräumt wird. So entstehen authentische Aufnahmen. Erinnerungen, die zeigen, wie besonders diese Freundschaft ist.',
      imageUrl: 'static/portfolio/couple/R62_0394.jpg',
    },
  ],
}

useGalleryMeta(portfolioId, title, description)
</script>
