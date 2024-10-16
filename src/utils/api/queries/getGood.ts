import { TcatalogGood } from "../../../../types/goods"
import { TresponseData } from "../types"

export const getGood = async (id: number): Promise<TresponseData<TcatalogGood> | null> => {
  try {
    const res = await fetch(`/api/goods/${id}`)
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error)
    return null
  }
}
