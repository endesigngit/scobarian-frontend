import { create, createStore } from "zustand"
import { createBearSlice } from "./bearSlice"
import { createFishSlice } from "./fishSlice"
import { TStore, TStoreState } from "./types"

export const createBoundStore = () => {
  return createStore<TStore>()((set) => ({
    ...createBearSlice(set),
    ...createFishSlice(set)
  }))
}
