import { TSet, TStore } from "../types"
import { actionWrapper } from "../utils"
import { TFishSlice } from "./types"

export const createFishSlice = (set: TSet): TFishSlice => ({
  fishes: 0,
  addFish: () =>
    actionWrapper(set, (state) => {
      state.fishes++
    })
})
