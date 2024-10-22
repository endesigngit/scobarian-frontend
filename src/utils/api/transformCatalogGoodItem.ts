import { TcatalogGoodItem } from "../../../types/goodItem"

export const transformCatalogGoodItem = (data: any): TcatalogGoodItem => {
  return {
    id: data.data.id,
    name: data.data.attributes.name,
    price: data.data.attributes.good.data.attributes.price,
    type: data.data.attributes.good.data.attributes.type[0],
    gender: data.data.attributes.gender,
    color: data.data.attributes.color,
    size: data.data.attributes.size,
    colors: data.data.attributes.good.data.attributes.item_goods.data.map((good: any) => good.attributes.color),
    sizes: data.data.attributes.good.data.attributes.item_goods.data.map((good: any) => good.attributes.size),
    images: data.data.attributes.images.data.map((image: any) => image.attributes.url),
    care: data.data.attributes.good.data.attributes.care,
    compound: data.data.attributes.good.data.attributes.compound,
    material: data.data.attributes.good.data.attributes.material,
    category: data.data.attributes.good.data.attributes.name,
    slug: data.data.attributes.good.data.attributes.slug
  }
}
