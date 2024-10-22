import { TcatalogGood } from "../../../../types/goods"
import { TresponseData } from "../types"

export const getAllItemGoods = async (gender: string): Promise<TresponseData<any> | null> => {
  let api = gender == "" ? "/api/item-goods" : `/api/item-goods${gender}`
  try {
    const res = await fetch(`${api}`)
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error)
    return null
  }
}
