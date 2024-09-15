import { TresponseData } from "../types"

export const getItemGood = async (id: number): Promise<TresponseData<any> | null> => {
  try {
    const res = await fetch(`/api/item-goods/${id}`)
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error)
    return null
  }
}
