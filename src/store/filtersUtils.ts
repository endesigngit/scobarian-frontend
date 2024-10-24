import { TcatalogGoodItem } from "../../types/goodItem"
import { TFilters } from "../../types/filters"

export const isEmptyFilters = (filters: TFilters): boolean => {
  let res = []
  let filter: keyof TFilters
  for (filter in filters) {
    filters[filter].length == 0 ? res.push(true) : res.push(false)
  }
  return res.every((val) => val == true)
}

export const sortByPrice = (goods: TcatalogGoodItem[], value: string[]): TcatalogGoodItem[] => {
  let result: TcatalogGoodItem[] = goods.slice()
  if (value.includes("Низкая цена")) {
    return result.sort((a: TcatalogGoodItem, b: TcatalogGoodItem) => a.price - b.price)
  }
  return result.sort((a: TcatalogGoodItem, b: TcatalogGoodItem) => b.price - a.price)
}
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

  if (filters.colorList.length > 0) {
    result = result.concat(filterByColor(goods, filters.colorList))
  }
  if (filters.sizeList.length > 0) {
    // result = result.concat(filterBySize(goods, filters.sizeList))
    let filterTarget = result.length == 0 ? goods : result
    result = filterBySize(filterTarget, filters.sizeList)
  }
  if (filters.typeList.length > 0) {
    let filterTarget = result.length == 0 ? goods : result
    result = filterByProductType(filterTarget, filters.typeList)
  }
  if (filters.gender.length > 0) {
    let filterTarget = result.length == 0 ? goods : result
    result = filterByGender(filterTarget, filters.gender)
  }
  if (filters.sortList.length > 0) {
    let filterTarget = result.length == 0 ? goods : result
    result = sortByPrice(filterTarget, filters.sortList)
  }
  const uniqresult = Array.from(new Set(result))
  return uniqresult
}
