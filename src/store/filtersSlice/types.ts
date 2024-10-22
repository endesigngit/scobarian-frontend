import { TFilters } from "../../../types/filters"
import { TcatalogGoodItem } from "../../../types/goodItem"

export type TFiltersState = {
  filters: TFilters
  filetredGoods: TcatalogGoodItem[]
}

export type TFiltersActions = {
  setFilters: (filter: { type: string; value: string }) => void
  removeFilters: (filter: { type: string; value: string }) => void
}

export type TFiltersSlice = TFiltersState & TFiltersActions
