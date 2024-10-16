import { endpoints } from "@/utils/api/endpoints"
import { transformCatalogGoods } from "@/utils/api/transformCatalogGoods"
import { NextRequest } from "next/server"
import qs from "qs"

export async function GET(request: NextRequest, { params: { id } }: { params: { id: number } }) {
  const searchParams = request.nextUrl.searchParams

  const query = qs.stringify({
    populate: {
      images: {
        fields: ["url"]
      }
    }
  })

  const res = await fetch(`${endpoints.getItemGood(id)}?${query}`, {
    headers: {
      Authorization: `bearer ${process.env.STRAPI_API_KEY}`,
      "Content-Type": "application/json"
    },
    credentials: "include"
  })
  const data = await res.json()

  return Response.json({ data })
}
