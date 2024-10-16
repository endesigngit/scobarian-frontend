import { TcatalogGood } from "../../../types/goods"
import { TSet, TStore } from "../types"
import { actionWrapper } from "../utils"
import { TGoodsSlice } from "./types"

export const createGoodsSlice = (set: TSet): TGoodsSlice => ({
  goods: [],
  addGoods: actionWrapper(set, (state, payload: TcatalogGood[] | undefined) => {
    if (payload) {
      state.goods = [...payload]
    }
  })
})
