import { endpoints } from "@/utils/api/endpoints"
import { transformCatalogGoods } from "@/utils/api/transformCatalogGoods"
import { NextRequest } from "next/server"
import qs from "qs"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const gender = searchParams.get("gender") || ""

  const query = qs.stringify({
    fields: ["name", "price", "slug", "type"],
    populate: {
      item_goods: {
        fields: ["color", "size"],
        populate: {
          images: {
            fields: ["url"]
          }
        }
      }
    },
    filters: {
      gender: {
        $contains: gender
      }
    }
  })

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
