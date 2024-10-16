"use client"

import { type ReactNode, createContext, useRef, useContext } from "react"
import { useStore } from "zustand"

import { type TStore } from "@/store/types"
import { createBoundStore } from "@/store"

export type TStoreApi = ReturnType<typeof createBoundStore>

export const BoundStoreContext = createContext<TStoreApi | undefined>(undefined)

export interface StoreProviderProps {
  children: ReactNode
}

export const BoundStoreProvider = ({ children }: StoreProviderProps) => {
  const storeRef = useRef<TStoreApi>()
  if (!storeRef.current) {
    storeRef.current = createBoundStore()
  }

  return <BoundStoreContext.Provider value={storeRef.current}>{children}</BoundStoreContext.Provider>
}

export const useBoundStore = <T,>(selector: (store: TStore) => T): T => {
  const boundStoreContext = useContext(BoundStoreContext)

  if (!boundStoreContext) {
    throw new Error(`useBoundStore must be used within BoundStoreProvider`)
  }

  return useStore(boundStoreContext, selector)
}
