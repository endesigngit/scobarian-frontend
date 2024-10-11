import { Tfeedback } from "../../../types/feedback"

export const STRAPI_URL = "http://admin.skobarian.ru"

export const endpoints = {
  goods: `${STRAPI_URL}/api/goods`,
  itemGoods: `${STRAPI_URL}/api/item-goods`,
  getGood: (id: number) => `${STRAPI_URL}/api/goods/${id}`,
  getItemGood: (id: number) => `${STRAPI_URL}/api/item-goods/${id}`,
  feedback: `${STRAPI_URL}/api/feedbacks`,
  setFeedback: (data: Tfeedback) => `${STRAPI_URL}/api/feedbacks`
}
