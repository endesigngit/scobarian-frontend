import { TcatalogGoodItem } from "../../../types/goodItem"

export type TGoodItemsState = {
  itemsGoods: TcatalogGoodItem[]
}

export type TGoodItemsActions = {
  addItemsGoods: (goods: TcatalogGoodItem[]) => void
}

export type TGoodItemsSlice = TGoodItemsState & TGoodItemsActions
