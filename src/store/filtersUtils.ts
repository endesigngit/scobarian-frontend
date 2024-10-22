import { TcatalogGoodItem } from "../../types/goodItem"
import { TFilters } from "../../types/filters"

export const filterBySize = (goods: TcatalogGoodItem[], value: string[]): TcatalogGoodItem[] => {
  let result: TcatalogGoodItem[] = []
  value.forEach((item) => {
    result = result.concat(goods.filter((good) => good.size == item))
  })
  return result
}
export const filterByColor = (goods: TcatalogGoodItem[], value: string[]): TcatalogGoodItem[] => {
  let result: TcatalogGoodItem[] = []
  value.forEach((item) => {
    result = result.concat(goods.filter((good) => good.color == item))
  })
  return result
}
export const filterByProductType = (goods: TcatalogGoodItem[], value: string[]): TcatalogGoodItem[] => {
  let result: TcatalogGoodItem[] = []
  value.forEach((item) => {
    result = result.concat(goods.filter((good) => good.type == item))
  })
  return result
}
export const filterByGender = (goods: TcatalogGoodItem[], value: string): TcatalogGoodItem[] => {
  return goods.filter((good) => good.gender == value)
}

export const getFilteredGoods = (goods: TcatalogGoodItem[], filters: TFilters): TcatalogGoodItem[] => {
  let result: TcatalogGoodItem[] = []
  if (filters.sizeList.length > 0) {
    result = result.concat(filterBySize(goods, filters.sizeList))
  }
  if (filters.colorList.length > 0) {
    result = result.concat(filterByColor(goods, filters.colorList))
  }
  if (filters.typeList.length > 0) {
    result = result.concat(filterByProductType(goods, filters.typeList))
  }
  if (filters.gender) {
    result = result.concat(filterByGender(goods, filters.gender))
  }
  // console.log(result)
  return Array.from(new Set(result)) ?? goods
}
