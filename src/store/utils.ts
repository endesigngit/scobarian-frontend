import { produce } from "immer"
import { TStore, TSet } from "./types"

export const actionWrapper = (set: TSet, cb: (state: TStore) => void) => () => set(produce(cb))
