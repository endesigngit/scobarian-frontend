//товар из каталога
export type TcatalogGood = {
  name: string
  price: number
  type: string[]
  colors: string[]
  sizes: string[]
  previewImagesByColor: {
    [color: string]: string
  }
  slug: string
}
