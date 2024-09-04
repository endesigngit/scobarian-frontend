import { endpoints } from "@/utils/api/endpoints"
import { transformCatalogGoods } from "@/utils/api/transformCatalogGoods"
import { NextRequest } from "next/server"
import qs from "qs"

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const searchParams = request.nextUrl.searchParams

  const query = qs.stringify({
    populate: {
      item_goods: {
        populate: {
          images: {
            fields: ["url"]
          }
        }
      }
    }
  })
  console.log('asdasda');
  
  const res = await fetch(`${endpoints.goods}?${query}`, {
    headers: {
      Authorization: `bearer ${process.env.STRAPI_API_KEY}`,
      "Content-Type": "application/json"
    },
    credentials: "include"
  })
  const data = await res.json()

  const transformedData = transformCatalogGoods(data)

  return Response.json({ data: transformedData })
}
