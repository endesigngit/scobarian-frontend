export const filtersConst = {
  // sortList = ["Низкая цена", "Высокая цена", "Новое", "скидки"]
  sortList: ["Низкая цена", "Высокая цена"],
  sizeList: ["XS", "S", "M", "L", "ХL"],
  typeList: ["Худи", "Бомбер", "Футболка"],
  colorList: ["milk", "steel", "black", "indigo"]
}

export enum filterType {
  SORT = "sort",
  SIZE = "size",
  COLOR = "color",
  CATEGORY = "category",
  GENDER = "gender"
}
