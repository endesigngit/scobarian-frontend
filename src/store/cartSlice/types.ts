export type TProduct = {
  name: string
  price: string
}
export type TCartSliceState = {
  products: TProduct[]
}

export type TCartSliceActions = {
  addProduct: (product: TProduct) => void
  deleteProduct: () => void
  clearCart: () => void
}

export type TCartSlice = TCartSliceState & TCartSliceActions
