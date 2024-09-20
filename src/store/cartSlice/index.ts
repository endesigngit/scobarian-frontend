import { TSet, TStore } from "../types"
import { actionWrapper } from "../utils"
import { TCartSlice } from "./types"

export const createCartSlice = (set: TSet): TCartSlice => ({
  products: [],
  addProduct: (product) => {
    actionWrapper(set, (state) => {
      state.products.push(product)
    })
  },
  deleteProduct: actionWrapper(set, (state) => {}),
  clearCart: actionWrapper(set, (state) => {
    state.products = []
  })
})
