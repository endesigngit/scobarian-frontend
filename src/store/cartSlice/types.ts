import { TcatalogGood } from "../../../types/goods"

export type TCartSliceState = {
  cartProducts: TcatalogGood[]
}

export type TCartSliceActions = {
  addToCart: (product: TcatalogGood) => void
  deleteProduct: (product: TcatalogGood) => void
  clearCart: () => void
}

export type TCartSlice = TCartSliceState & TCartSliceActions
