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
    const currentIndex = state.cartProducts.findIndex((product) => product.id == payload.id)
    const length = state.cartProducts.length
    if (currentIndex >= 0) {
      state.cartProducts = [
        ...state.cartProducts.slice(0, currentIndex),
        ...state.cartProducts.slice(currentIndex + 1, length)
      ]
    }
  }),
  clearCart: () =>
    actionWrapper(set, (state, payload) => {
      state.cartProducts = []
    })
})
