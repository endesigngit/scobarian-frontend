//товар из каталога
export type TcatalogGood = {
  id: string
  name: string
  price: number
  type: string[]
  colors: string[]
  sizes: string[]
  images: string[]
  previewImagesByColor?: {
    [color: string]: string
  }
  consistPrimary: string
  materialPrimary: string
  consistUnderlay?: string
  materialUnderlay?: string
  slug: string
}
