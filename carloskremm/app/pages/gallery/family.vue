<template>
  <NuxtLayout>
    <AreaEntry :gallery-item="galleryItem" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const pageName: string = 'Familie'
const portfolioId: string = 'family'

const title: string = `Carlos Kremm | ${pageName}`
const description: string = `ToDo`

const galleryItem = {
  title: pageName,
  portfolioId,
  overview: [
    {
      title: 'Zeitlose Erinnerungen mit der Familie',
      text: 'Familienfotos sind kleine Zeitkapseln voller Herzschlag und Leben. Echte Nähe, gemeinsames Lachen und kleine Gesten fügen sich zu einem Ganzen. So entstehen Aufnahmen, die zeigen, was Familie wirklich bedeutet.',
      imageUrl: 'static/portfolio/couple/R62_0483.jpg',
    },
    {
      title: 'Echte Nähe',
      text: 'Kein starres Posieren, sondern Momente voller Bewegung und Gefühl. Wenn Kinder lachen, Arme sich umschlingen oder ein Blick mehr sagt als Worte. Diese ungestellten Augenblicke werden zu Erinnerungen voller Leben.',
      imageUrl: 'static/portfolio/couple/R62_0288.jpg',
    },
    {
      title: 'Bilder, die bleiben',
      text: 'Ob im Studio oder in der Natur – entscheidend ist, dass sich alle wohlfühlen. Wenn Leichtigkeit und Vertrauen spürbar sind, entstehen authentische Familienbilder. Fotos, die euch so zeigen, wie ihr wirklich seid: lebendig, liebevoll, echt.',
      imageUrl: 'static/portfolio/couple/R62_0394.jpg',
    },
  ],
}

useGalleryMeta(portfolioId, title, description)
</script>
