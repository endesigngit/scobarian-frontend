import { Tfeedback } from "../../../../types/feedback"
import { TresponseData } from "../types"

export const getAllFeedback = async (): Promise<TresponseData<Tfeedback[]> | null> => {
  try {
    const res = await fetch("/api/feedback")
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error)
    return null
  }
}
