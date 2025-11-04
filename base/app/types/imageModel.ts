export class ImageModel {
  name: string = ''
  orientation?: string = ''
  alt?: string = ''

  constructor(
    name: string,
    orientation: string,
    descriptions?: string,
  ) {
    this.name = name
    this.orientation = orientation
    this.alt = descriptions
  }
}
