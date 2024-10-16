import { TBearSlice, TBearSliceState } from "./bearSlice/types"
import { TFishSlice, TFishSliceState } from "./fishSlice/types"
import { TCartSlice, TCartSliceState } from "./cartSlice/types"

export type TStoreState = TFishSliceState & TBearSliceState & TCartSliceState

export type TStore = TFishSlice & TBearSlice & TCartSlice

export type TSet = (
  partial: TStore | Partial<TStore> | ((state: TStore) => TStore | Partial<TStore>),
  replace?: boolean | undefined
) => void
