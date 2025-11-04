<template>
  <NuxtLayout>
    <AreaEntry :gallery-item="galleryItem" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const pageName: string = 'Automobile'
const portfolioId: string = 'cars'

const title: string = `Carlos Kremm | ${pageName}`
const description: string = `ToDo`

const galleryItem = {
  title: pageName,
  portfolioId,
  overview: [
    {
      title: 'Charakter in Form',
      text: 'Ein Auto ist Ausdruck von Leidenschaft, Stil und Geschichte. Jede Linie, jedes Detail erzählt von Emotion, Bewegung und Zeitgeist. Fotografie wird hier zur Hommage an Design und Seele. Alte Formen und Emotionen neu entdecken und in Bildern festhalten.',
      imageUrl: 'static/portfolio/couple/R62_0483.jpg',
    },
    {
      title: 'Licht und Oberfläche',
      text: 'Natürliches Licht und Reflexionen bringen Form und Charakter zum Vorschein. Jedes Fahrzeug wird in seiner Einzigartigkeit inszeniert – ob Oldtimer oder moderner Sportwagen. So entstehen stimmungsvolle Aufnahmen, die mehr sind als reine Dokumentation.',
      imageUrl: 'static/portfolio/couple/R62_0288.jpg',
    },
    {
      title: 'Zeitlose Ästhetik',
      text: 'Diese Bilder wecken Emotionen – das Gefühl von Freiheit, Nostalgie oder purer Eleganz. Automobilfotografie als feine Balance zwischen Technik und Gefühl. Klar, kraftvoll, ästhetisch – mit einer Spur von Zeitlosigkeit und dem richtigen Blick für Details.',
      imageUrl: 'static/portfolio/couple/R62_0394.jpg',
    },
  ],
}

useGalleryMeta(portfolioId, title, description)
</script>
