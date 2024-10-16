import { TcatalogGood } from "../../../../types/goods"
import { TresponseData } from "../types"

export const getAllItemGoods = async (): Promise<TresponseData<any> | null> => {
  try {
    const res = await fetch("/api/item-goods")
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error)
    return null
  }
}
