"use client"

import { useBoundStore } from "@/store/StoreProvider"
import { Typography } from "@/UI/Typography/Typography"
import { createFeedback } from "@/utils/api/queries/createFeedback"
import { getAllFeedback } from "@/utils/api/queries/getAllFeedbacks"
import { getAllGoods } from "@/utils/api/queries/getAllGoods"
import { getAllItemGoods } from "@/utils/api/queries/getAllItemGoods"
import { getGood } from "@/utils/api/queries/getGood"
import { getItemGood } from "@/utils/api/queries/getItemGood"
import Link from "next/link"
import { useEffect } from "react"

export default function Test() {
  useEffect(() => {
    // getAllGoods().then((data) => console.log("getAllGoods:", data))
    // getAllFeedback().then((data) => console.log("feedback:", data))
    // getAllItemGoods().then((data) => console.log("getAllItemGoods:", data))
    // getGood(1).then((data) => console.log("getGood:", data))
    // createFeedback({ userName: "tstw", userPhone: "5858885", userEmail: "chv@mail.ru", userText: "" })
    // getItemGood(1).then((data) => console.log("getItemGood:", data))
  }, [])

  const { bears, fishes } = useBoundStore((state) => ({ bears: state.bears, fishes: state.fishes }))
  return (
    <main>
      <div>
        <h3>Bears: {bears}</h3> <h3>Fishes: {fishes}</h3>
        <Link href="../">
          <Typography tag="span" variant="text">
            Go back
          </Typography>
        </Link>
      </div>
    </main>
  )
}
