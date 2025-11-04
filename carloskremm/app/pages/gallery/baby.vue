<template>
  <NuxtLayout>
    <AreaEntry :gallery-item="galleryItem" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const pageName: string = 'Babybauch'
const portfolioId: string = 'baby'

const title: string = `Carlos Kremm | ${pageName}`
const description: string = `ToDo`

const galleryItem = {
  title: pageName,
  portfolioId,
  overview: [
    {
      title: 'Ein leises Wunder',
      text: 'Diese besondere Zeit zwischen Erwartung und Neubeginn ist einzigartig. Sanftes Licht, natürliche Posen und warme Farben betonen das, was gerade wächst. Ein Moment, in dem alles beginnt – festgehalten mit Feingefühl und Ruhe.',
      imageUrl: 'static/portfolio/couple/R62_0483.jpg',
    },
    {
      title: 'Weiblichkeit und Geborgenheit',
      text: 'Zärtlichkeit, Anmut und Stolz vereinen sich in diesen Bildern. Fließende Stoffe, weiches Licht und feine Details schaffen eine Atmosphäre der Geborgenheit. Jedes Foto wird zu einem Symbol für die Kraft und Schönheit des Lebens.',
      imageUrl: 'static/portfolio/couple/R62_0288.jpg',
    },
    {
      title: 'Erinnerungen für ein neues Leben',
      text: 'Ein Babybauchshooting wird zu einem stillen Fest der Vorfreude. Die Bilder erzählen von Liebe, Veränderung und dem Wunder, Leben zu schenken. Erinnerungen, die bleiben – für dich und für das Kind, das daraus erblüht.',
      imageUrl: 'static/portfolio/couple/R62_0394.jpg',
    },
  ],
}

useGalleryMeta(portfolioId, title, description)
</script>
