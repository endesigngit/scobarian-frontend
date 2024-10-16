import { TBearSlice, TBearSliceState } from "./bearSlice/types"
import { TFishSlice, TFishSliceState } from "./fishSlice/types"
import { TCartSlice, TCartSliceState } from "./cartSlice/types"
import { TGoodsSlice, TGoodsState } from "./goodsSlice/types"
import { TGoodItemsSlice, TGoodItemsState } from "./itemGoodsSlice/types"

export type TStoreState = TFishSliceState & TBearSliceState & TCartSliceState & TGoodsState & TGoodItemsState

export type TStore = TFishSlice & TBearSlice & TCartSlice & TGoodsSlice & TGoodItemsSlice

export type TSet = (
  partial: TStore | Partial<TStore> | ((state: TStore) => TStore | Partial<TStore>),
  replace?: boolean | undefined
) => void
