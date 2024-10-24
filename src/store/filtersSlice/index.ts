import { filterType } from "@/utils/filtersConst"
import { TcatalogGoodItem } from "../../../types/goodItem"
import { TSet, TStore } from "../types"
import { actionWrapper } from "../utils"
import { TFiltersSlice } from "./types"
import { getFilteredGoods, isEmptyFilters } from "@/store/filtersUtils"

export const createFiltersSlice = (set: TSet): TFiltersSlice => ({
  filters: {
    sortList: [],
    sizeList: [],
    typeList: [],
    colorList: [],
    gender: ""
  },
  filetredGoods: [],
  setFilters: actionWrapper(set, (state, payload: { type: filterType; value: string }) => {
    switch (payload.type) {
      case filterType.CATEGORY:
        state.filters.typeList.push(payload.value)
        break
      case filterType.COLOR:
        state.filters.colorList.push(payload.value)
        break
      case filterType.SIZE:
        state.filters.sizeList.push(payload.value)
        break
      case filterType.GENDER:
        state.filters.gender = payload.value
        break
      case filterType.SORT:
        state.filters.sortList = [payload.value]
        break
    }
    if (isEmptyFilters(state.filters)) {
      state.filetredGoods = state.itemsGoods
    } else {
      state.filetredGoods = getFilteredGoods(state.itemsGoods, state.filters)
    }
  }),
  removeFilters: actionWrapper(set, (state, payload: { type: filterType; value: string }) => {
    switch (payload.type) {
      case filterType.CATEGORY:
        state.filters.typeList = state.filters.typeList.filter((item) => item != payload.value)
        break
      case filterType.COLOR:
        state.filters.colorList = state.filters.colorList.filter((item) => item != payload.value)
        break
      case filterType.SIZE:
        state.filters.sizeList = state.filters.sizeList.filter((item) => item != payload.value)
        break
      case filterType.GENDER:
        state.filters.gender = payload.value
        break
      case filterType.SORT:
        state.filters.sortList = []
        break
    }
    if (isEmptyFilters(state.filters)) {
      state.filetredGoods = state.itemsGoods
    } else {
      state.filetredGoods = getFilteredGoods(state.itemsGoods, state.filters)
    }
  })
})
