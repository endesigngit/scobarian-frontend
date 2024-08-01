import { TBearSlice, TBearSliceState } from "./bearSlice/types"
import { TFishSlice, TFishSliceState } from "./fishSlice/types"

export type TStoreState = TFishSliceState & TBearSliceState

export type TStore = TFishSlice & TBearSlice

export type TSet = (
  partial: TStore | Partial<TStore> | ((state: TStore) => TStore | Partial<TStore>),
  replace?: boolean | undefined
) => void
