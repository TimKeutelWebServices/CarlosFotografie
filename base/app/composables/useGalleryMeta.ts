export function useGalleryMeta(
  pageName: string,
  title: string,
  description: string,
) {
  useSeoMeta({
    title,
    ogTitle: title,
    description,
    ogDescription: description,
  })
  definePageMeta({
    keepalive: true,
    scrollToTop: false,
  })
  useSchemaOrg([
    defineBreadcrumb({
      itemListElement: [
        { id: `Home`, name: 'Home', item: '/' },
        { id: `Home_Portfolio`, name: 'Portfolio', item: '/gallery' },
        { id: `Home_Portfolio_${pageName}`, name: pageName, item: `/gallery/${getCurrentInstance()?.type.__name}` },
      ],
    }),
  ])
  useRobotsRule({ index: true, follow: true })
}
