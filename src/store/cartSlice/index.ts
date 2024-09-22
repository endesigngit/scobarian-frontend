import { TcatalogGood } from "../../../types/goods"
import { TSet, TStore } from "../types"
import { actionWrapper } from "../utils"
import { TCartSlice } from "./types"

export const createCartSlice = (set: TSet): TCartSlice => ({
  cartProducts: [],
  addToCart: actionWrapper(set, (state, payload: TcatalogGood) => {
    state.cartProducts.push(payload)
  }),
  deleteProduct: actionWrapper(set, (state, payload: TcatalogGood) => {
    state.cartProducts = state.cartProducts.filter((product) => product.id != payload.id)
  }),
  clearCart: () =>
    actionWrapper(set, (state, payload) => {
      state.cartProducts = []
    })
})
