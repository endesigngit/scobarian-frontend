import { Tfeedback } from "../../../../types/feedback"
import { TresponseData } from "../types"

export const createFeedback = async (feedback: Tfeedback): Promise<TresponseData<Tfeedback> | null> => {
  try {
    const res = await fetch(`/api/feedback`, {
      method: "POST",
      body: JSON.stringify({ data: feedback })
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error)
    return null
  }
}
