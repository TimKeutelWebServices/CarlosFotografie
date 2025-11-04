<template>
  <NuxtLayout>
    <AreaEntry :gallery-item="galleryItem" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const pageName: string = 'Paare'
const portfolioId: string = 'couple'

const title: string = `Carlos Kremm | ${pageName}`
const description: string = `ToDo`

const galleryItem = {
  title: pageName,
  portfolioId,
  overview: [
    {
      title: 'Eure Geschichte',
      text: 'Jede Liebe hat ihren eigenen Rhythmus, ihr Licht, ihren Klang. In stillen Momenten oder ausgelassenem Lachen zeigt sich, was euch verbindet. Diese Echtheit wird in Bildern bewahrt, die von Nähe erzählen.',
      imageUrl: 'static/portfolio/couple/R62_0483.jpg',
    },
    {
      title: 'Nähe und Vertrauen',
      text: 'Liebe ist bereits in kleinen Gesten spürbar – im Blick, im Lächeln, in einer Berührung. Wenn zwei Menschen sich öffnen, entsteht etwas, das kein Skript, kein Drehbuch inszenieren kann. Diese Aufnahmen zeigen eure Beziehung so, wie sie ist: echt, verträumt und romantisch.',
      imageUrl: 'static/portfolio/couple/R62_0288.jpg',
    },
    {
      title: 'Zartheit und Gefühl',
      text: 'Zärtlichkeit, Vertrauen und Emotion werden zu einem sanften Erzählfluss aus Bildern. Mit Licht und Atmosphäre entstehen Aufnahmen, welche die Verbindung zwischen zwei Menschen spürbar machen. Ein Blick genügt – und der Moment bleibt für immer.',
      imageUrl: 'static/portfolio/couple/R62_0394.jpg',
    },
  ],
}

useGalleryMeta(portfolioId, title, description)
</script>
