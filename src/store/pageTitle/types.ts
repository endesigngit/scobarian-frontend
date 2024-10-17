export type TPageTitleState = {
  title: string
}

export type TPageTitleActions = {
  setTitle: (newTitle: string) => void
}

export type TPageTitleSlice = TPageTitleState & TPageTitleActions
