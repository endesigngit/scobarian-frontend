import { TSet, TStore } from "../types"
import { actionWrapper } from "../utils"
import { TCartSlice } from "./types"

export const createCartSlice = (set: TSet): TCartSlice => ({
  cartProducts: [],
  addProduct: (product) => {
    actionWrapper(set, (state) => {
      state.cartProducts.push(product)
    })
  },
  deleteProduct: actionWrapper(set, (state) => {}),
  clearCart: actionWrapper(set, (state) => {
    state.cartProducts = []
  })
})
