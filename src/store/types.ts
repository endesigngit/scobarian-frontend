import { TBearSlice, TBearSliceState } from "./bearSlice/types"
import { TFishSlice, TFishSliceState } from "./fishSlice/types"
import { TCartSlice, TCartSliceState } from "./cartSlice/types"
import { TGoodsSlice, TGoodsState } from "./goodsSlice/types"
import { TGoodItemsSlice, TGoodItemsState } from "./itemGoodsSlice/types"
import { TPageTitleSlice, TPageTitleState } from "./pageTitle/types"

export type TStoreState = TFishSliceState &
  TBearSliceState &
  TCartSliceState &
  TGoodsState &
  TGoodItemsState &
  TPageTitleState

export type TStore = TFishSlice & TBearSlice & TCartSlice & TGoodsSlice & TGoodItemsSlice & TPageTitleSlice

export type TSet = (
  partial: TStore | Partial<TStore> | ((state: TStore) => TStore | Partial<TStore>),
  replace?: boolean | undefined
) => void
