import { endpoints } from "@/utils/api/endpoints"
import { transformCatalogGoods } from "@/utils/api/transformCatalogGoods"
import { TresponseData } from "@/utils/api/types"
import { NextRequest } from "next/server"
import { TcatalogGood } from "../../../../types/goods"
import qs from "qs"
import { transformCatalogGoodItem } from "@/utils/api/transformCatalogGoodItems"
import { TcatalogGoodItem } from "../../../../types/goodItem"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams

  const query = qs.stringify({
    fields: ["name", "size", "color", "count", "discount", "gender", "id"],
    populate: {
      good: {
        fields: ["name", "price", "slug", "type", "care", "compound", "material", "slug"],
        populate: {
          item_goods: {
            fields: ["color", "size"]
          }
        }
      },
      images: {
        fields: ["url"]
      }
    }
  })

  const res = await fetch(`${endpoints.itemGoods}?${query}`, {
    headers: {
      Authorization: `bearer ${process.env.STRAPI_API_KEY}`,
      "Content-Type": "application/json"
    },
    credentials: "include"
  })
  const data = await res.json()
  const transformedData = transformCatalogGoodItem(data)
  const responseData: TresponseData<TcatalogGoodItem[]> = { data: transformedData }
  return Response.json({ data: responseData })
}
