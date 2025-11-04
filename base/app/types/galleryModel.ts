export class GalleryModel {
  title: string = ''
  portfolioId: string = ''
  overview?: GalleryModelOverviewItem[] = []
  images?: string[] = []
}

export class GalleryModelOverviewItem {
  title: string = ''
  text?: string
  imageUrl?: string
  imageAlt?: string
}
