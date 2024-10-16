import { TcatalogGoodItem } from "../../../types/goodItem"

export type TCartSliceState = {
  cartProducts: TcatalogGoodItem[]
}

export type TCartSliceActions = {
  addToCart: (product: TcatalogGoodItem) => void
  deleteProduct: (product: TcatalogGoodItem) => void
  clearCart: (status: boolean) => void
}

export type TCartSlice = TCartSliceState & TCartSliceActions
