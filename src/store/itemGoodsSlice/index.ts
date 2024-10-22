import { TcatalogGoodItem } from "../../../types/goodItem"
import { TSet, TStore } from "../types"
import { actionWrapper } from "../utils"
import { TGoodItemsSlice } from "./types"

export const createGoodItemsSlice = (set: TSet): TGoodItemsSlice => ({
  itemsGoods: [],
  addItemsGoods: actionWrapper(set, (state, payload: TcatalogGoodItem[]) => {
    state.itemsGoods = payload
    state.filetredGoods = payload
  })
})
