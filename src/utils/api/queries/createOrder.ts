import { Torder } from "../../../../types/order"
import { TresponseData } from "../types"

export const createOrder = async (order: Torder): Promise<TresponseData<Torder> | null> => {
  try {
    const res = await fetch(`/api/order`, {
      method: "POST",
      body: JSON.stringify({ data: order })
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error)
    return null
  }
}
