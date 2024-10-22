import { TcatalogGoodItem } from "../../../types/goodItem"

export const transformCatalogGoodItems = (data: any): TcatalogGoodItem[] => {
  return data.data.map((item: any) => {
    return {
      id: item.id,
      name: item.attributes.name,
      price: item.attributes.good.data.attributes.price,
      gender: item.attributes.gender,
      type: item.attributes.good.data.attributes.type[0],
      color: item.attributes.color,
      size: item.attributes.size,
      colors: item.attributes.good.data.attributes.item_goods.data.map((good: any) => good.attributes.color),
      sizes: item.attributes.good.data.attributes.item_goods.data.map((good: any) => good.attributes.size),
      images: item.attributes.images.data.map((image: any) => image.attributes.url),
      care: item.attributes.good.data.attributes.care,
      compound: item.attributes.good.data.attributes.compound,
      material: item.attributes.good.data.attributes.material,
      category: item.attributes.good.data.attributes.name,
      slug: item.attributes.good.data.attributes.slug
    }
  })
}
