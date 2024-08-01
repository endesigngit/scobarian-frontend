import { TSet, TStore } from "../types"
import { actionWrapper } from "../utils"
import { TBearSlice } from "./types"

export const createBearSlice = (set: TSet): TBearSlice => ({
  bears: 0,
  addBear: actionWrapper(set, (state) => {
    state.bears++
  }),
  eatFish: actionWrapper(set, (state) => {
    state.fishes--
  })
})
