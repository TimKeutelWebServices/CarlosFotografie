export class PricingModel {
  base?: PricingBaseModel
  packages?: PricingBaseModel[]
  additionals?: PricingBaseModel[]
}

export class PricingBaseModel {
  title?: string
  imageUrl?: string
  isBest?: string
  isSale?: string
  marks?: string[]
  price?: string
}
