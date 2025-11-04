<template>
  <NuxtLayout>
    <AreaEntry :gallery-item="galleryItem" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const pageName: string = 'Business Portraits'
const portfolioId: string = 'business'

const title: string = `Carlos Kremm | ${pageName}`
const description: string = `ToDo`

const galleryItem = {
  title: pageName,
  portfolioId,
  overview: [
    {
      title: 'Persönlichkeit zeigt Wirkung',
      text: 'Ein Businessportrait ist mehr als ein Foto – es ist eine Botschaft. Ausstrahlung, Haltung und Authentizität entscheiden darüber, wie Menschen dich wahrnehmen. Professionell, aber nahbar – so entsteht Vertrauen auf den ersten Blick.',
      imageUrl: 'static/portfolio/couple/R62_0483.jpg',
    },
    {
      title: 'Natürlich. Selbstbewusst. Echt.',
      text: 'Moderne Businessportraits zeigen Charakter statt Fassade. Sanftes Licht, natürliche Haltung und ehrlicher Ausdruck verleihen jedem Bild Glaubwürdigkeit. Bilder, die Kompetenz ausstrahlen und zugleich Persönlichkeit bewahren.',
      imageUrl: 'static/portfolio/couple/R62_0288.jpg',
    },
    {
      title: 'Ausdruck mit Stil',
      text: 'Ob im Studio, am Arbeitsplatz oder in deiner Firma – das Umfeld erzählt mit. Licht, Farbe und Stimmung unterstreichen, wofür du stehst. So entstehen Portraits, die Eindruck hinterlassen – klar, authentisch und mit Stil.',
      imageUrl: 'static/portfolio/couple/R62_0394.jpg',
    },
  ],
}

useGalleryMeta(portfolioId, title, description)
</script>
