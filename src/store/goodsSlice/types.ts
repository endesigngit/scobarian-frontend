import { TcatalogGood } from "../../../types/goods"

export type TGoodsState = {
  goods: TcatalogGood[]
}

export type TGoodsActions = {
  addGoods: (goods: TcatalogGood[] | undefined) => void
}

export type TGoodsSlice = TGoodsState & TGoodsActions
