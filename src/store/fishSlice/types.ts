export type TFishSliceState = {
  fishes: number
}

export type TFishSliceActions = {
  addFish: () => void
}

export type TFishSlice = TFishSliceState & TFishSliceActions