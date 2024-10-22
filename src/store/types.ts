import { TCartSlice, TCartSliceState } from "./cartSlice/types"
import { TGoodsSlice, TGoodsState } from "./goodsSlice/types"
import { TGoodItemsSlice, TGoodItemsState } from "./itemGoodsSlice/types"
import { TPageTitleSlice, TPageTitleState } from "./pageTitle/types"
import { TFiltersState, TFiltersSlice } from "./filtersSlice/types"

export type TStoreState = TCartSliceState & TGoodsState & TGoodItemsState & TPageTitleState & TFiltersState

export type TStore = TCartSlice & TGoodsSlice & TGoodItemsSlice & TPageTitleSlice & TFiltersSlice

export type TSet = (
  partial: TStore | Partial<TStore> | ((state: TStore) => TStore | Partial<TStore>),
  replace?: boolean | undefined
) => void
