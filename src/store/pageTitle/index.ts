import { TSet, TStore } from "../types"
import { actionWrapper } from "../utils"
import { TPageTitleSlice } from "./types"

export const createPageTitleSlice = (set: TSet): TPageTitleSlice => ({
  title: "",
  setTitle: actionWrapper(set, (state, payload: string) => {
    state.title = payload
  })
})
