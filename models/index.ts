interface IRatingPrice {
    rate: number
    count: number
}

export interface IProductItem {
    id: number
    category: string
    description: string
    image?: string
    price?: number
    title: string
    rating?: IRatingPrice
  }