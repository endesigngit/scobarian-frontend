import { createStore } from "zustand"
import { createBearSlice } from "./bearSlice"
import { createFishSlice } from "./fishSlice"
import { TStore } from "./types"

export const createBoundStore = () => {
  return createStore<TStore>()((set) => ({
    ...createBearSlice(set),
    ...createFishSlice(set)
  }))
}
