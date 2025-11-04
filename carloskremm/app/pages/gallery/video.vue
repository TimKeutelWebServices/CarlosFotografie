<template>
  <NuxtLayout>
    <AreaEntry :gallery-item="galleryItem" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const pageName: string = 'Videografie'
const portfolioId: string = 'video'

const title: string = `Carlos Kremm | ${pageName}`
const description: string = `ToDo`

const galleryItem = {
  title: pageName,
  portfolioId,
  overview: [
    {
      title: 'Bewegung, Gefühl, Atmosphäre.',
      text: 'Ich halte Momente in Bewegung fest – sanft, lebendig und authentisch. Ein Video erzählt nicht nur – es lässt dich erleben. Jeder Blick, jede Geste, jedes Lächeln wird zu einem Teil deiner Geschichte, eingefangen in lebendigen Momenten.',
      imageUrl: 'static/portfolio/couple/R62_0483.jpg',
    },
    {
      title: 'Vielseitige Locations, einzigartige Stimmung.',
      text: 'Ob draußen in der Natur oder in meinem Fotostudio – jede Location bietet eigene Lichtstimmungen und besondere Atmosphären. Wir nutzen den einzigartigen Charakter der Locations und verstärken so die emotionale Wirkung der Aufnahmen. Dafür steht modernste Technik - 4K Kameras, Drohne und Gimbal - zur Verfügung',
      imageUrl: 'static/portfolio/couple/R62_0288.jpg',
    },
    {
      title: 'Natürlich. Echt. Zeitlos.',
      text: 'Authentizität steht im Mittelpunkt: Videos, die echte Emotionen zeigen, ohne inszeniert zu wirken. Sie halten Momente fest, die im Gedächtnis bleiben – bewegend, nahbar und voller Ausdruckskraft. Dein Charakter wird zur künstlerischen Vision - festgehalten in bewegten Bildern als zeitlose Erinnerung an besondere Momente',
      imageUrl: 'static/portfolio/couple/R62_0394.jpg',
    },
  ],
}

useGalleryMeta(portfolioId, title, description)
</script>
