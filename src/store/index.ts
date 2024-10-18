import { createStore } from "zustand"
import { createCartSlice } from "./cartSlice"
import { createGoodsSlice } from "./goodsSlice"
import { createGoodItemsSlice } from "./itemGoodsSlice"
import { createPageTitleSlice } from "./pageTitle"
import { TStore } from "./types"

export const createBoundStore = () => {
  return createStore<TStore>()((set) => ({
    ...createCartSlice(set),
    ...createGoodsSlice(set),
    ...createGoodItemsSlice(set),
    ...createPageTitleSlice(set)
  }))
}
