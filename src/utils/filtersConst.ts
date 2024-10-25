export const filtersConst = {
  // sortList = ["Низкая цена", "Высокая цена", "Новое", "скидки"]
  sortList: ["Низкая цена", "Высокая цена"],
  sizeList: ["XS", "S", "M", "L", "XL"],
  typeList: ["Худи", "Бомбер", "Футболка"],
  colorList: ["Молочный", "Сталь", "Черный", "Индиго"]
}

export enum filterType {
  SORT = "sort",
  SIZE = "size",
  COLOR = "color",
  CATEGORY = "category",
  GENDER = "gender"
}

export type TNames = {
  [key: string]: string
}

export const colorNames: TNames = {
  Молочный: "milk",
  Сталь: "steel",
  Черный: "black",
  Индиго: "indigo"
}
export const categoryNames: TNames = {
  hoodie: "Худи",
  bomber: "Бомбер",
  "t-shirt": "Футболка"
}
