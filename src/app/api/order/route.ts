import { endpoints } from "@/utils/api/endpoints"
import { NextRequest } from "next/server"


export async function POST(request: NextRequest) {
  const order = await request.json()
  const res = await fetch(`${endpoints.order}`, {
    method: "POST",
    headers: {
      Authorization: `bearer ${process.env.STRAPI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(order),
    credentials: "include"
  })

  const data = await res.json()

  return Response.json({ data })
}