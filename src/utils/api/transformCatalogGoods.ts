import { TcatalogGood } from "../../../types/goods"

export const transformCatalogGoods = (data: any): TcatalogGood[] => {
  return data.data.map((item: any) => {
    return {
      name: item.attributes.name,
      price: item.attributes.price,
      type: item.attributes.type,
      colors: item.attributes.item_goods.data.map((good: any) => good.attributes.color),
      sizes: item.attributes.item_goods.data.map((good: any) => good.attributes.size),
      slug: item.attributes.slug,
      previewImagesByColor: item.attributes.item_goods.data.reduce((acc: any, good: any) => {
        acc[good.attributes.color] = good.attributes.images.data[0].attributes.url
        return acc
      }, {})
    }
  })
}
