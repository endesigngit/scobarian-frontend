import { createStore } from "zustand"
import { createBearSlice } from "./bearSlice"
import { createFishSlice } from "./fishSlice"
import { createCartSlice } from "./cartSlice"
import { TStore } from "./types"

export const createBoundStore = () => {
  return createStore<TStore>()((set) => ({
    ...createBearSlice(set),
    ...createFishSlice(set),
    ...createCartSlice(set)
  }))
}
