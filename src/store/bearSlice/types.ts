export type TBearSliceState = {
  bears: number
}

export type TBearSliceActions = {
  addBear: () => void
  eatFish: () => void
}

export type TBearSlice = TBearSliceState & TBearSliceActions
