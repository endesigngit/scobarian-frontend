import { TcatalogGood } from "../../types/goods"

const goods: TcatalogGood[] = [
  {
    id: "1",
    name: "Футболка",
    price: 5800,
    type: ["Футболка"],
    colors: ["Молочный", "Сталь", "Черный"],
    sizes: ["XS"],
    images: [
      "/t-shirt/t-shirt-mk-1.webp",
      "/t-shirt/t-shirt-mk-2.webp",
      "/t-shirt/t-shirt-mk-3.webp",
      "/t-shirt/t-shirt-mk-4.webp"
    ],
    consistPrimary: "95% хлопок, 5% эластан",
    materialPrimary: "кулирная гладь с велюр эффектом, плотность 240г/м^2",
    slug: "t-shirt-mk"
  },
  {
    id: "5",
    name: "Футболка",
    price: 5800,
    type: ["Футболка"],
    colors: ["Сталь", "Черный", "Молочный"],
    sizes: ["S"],
    images: [
      "http://admin.skobarian.ru/uploads/t_shirt_st_1_e7f401e72c.webp",
      "http://admin.skobarian.ru/uploads/t_shirt_st_2_b85f0f79e9.webp",
      "http://admin.skobarian.ru/uploads/t_shirt_st_3_8a9023a93c.webp",
      "http://admin.skobarian.ru/uploads/t_shirt_st_4_1f5891e2d7.webp",
      "http://admin.skobarian.ru/uploads/t_shirt_st_5_0a501389a1.webp"
    ],
    consistPrimary: "95% хлопок, 5% эластан",
    materialPrimary: "кулирная гладь с велюр эффектом, плотность 240г/м^2",
    slug: "t-shirt-st"
  },
  {
    id: "6",
    name: "Футболка",
    price: 5800,
    type: ["Футболка"],
    colors: ["Черный", "Молочный", "Сталь"],
    sizes: ["M"],
    images: [
      "/t-shirt/t-shirt-bl-1.webp",
      "/t-shirt/t-shirt-bl-2.webp",
      "/t-shirt/t-shirt-bl-3.webp",
      "/t-shirt/t-shirt-bl-4.webp"
    ],
    consistPrimary: "95% хлопок, 5% эластан",
    materialPrimary: "кулирная гладь с велюр эффектом, плотность 240г/м^2",
    slug: "t-shirt-bl"
  },
  {
    id: "2",
    name: "Бомбер",
    price: 12000,
    type: ["Бомбер"],
    colors: ["Черный"],
    sizes: ["L"],
    images: [
      "http://admin.skobarian.ru/uploads/bomber_bl_2_4a7c43189d.webp",
      "http://admin.skobarian.ru/uploads/bomber_bl_1_3889d8dc14.webp",
      "http://admin.skobarian.ru/uploads/bomber_bl_3_e42ad1cd6b.webp",
      "http://admin.skobarian.ru/uploads/bomber_bl_4_92b4863d89.webp"
    ],
    consistPrimary: "70% хлопок, 30% полиэстер.",
    materialPrimary: "футер 3-хнитка начес, плотность 330-340г/м^2",
    consistUnderlay: "95% хлопок, 5% эластан",
    materialUnderlay: "кулирная гладь с велюр эффектом, плотность 240г/м^2",
    slug: "bomber-bl"
  },
  {
    id: "3",
    name: "Худи",
    price: 7800,
    type: ["Худи"],
    colors: ["Черный", "Молочный", "Индиго"],
    sizes: ["L"],
    images: [
      "/hoodie/hoodie-bl-1.webp",
      "/hoodie/hoodie-bl-2.webp",
      "/hoodie/hoodie-bl-3.webp",
      "/hoodie/hoodie-bl-4.webp"
    ],
    consistPrimary: "70% хлопок, 30% полиэстер",
    materialPrimary: "футер 3-хнитка начес, плотность 330-340г/м^2",
    slug: "hoodie-bl"
  },
  {
    id: "7",
    name: "Худи",
    price: 7800,
    type: ["Худи"],
    colors: ["Молочный", "Индиго", "Черный"],
    sizes: ["M"],
    images: [
      "/hoodie/hoodie-mk-1.webp",
      "/hoodie/hoodie-mk-2.webp",
      "/hoodie/hoodie-mk-3.webp",
      "/hoodie/hoodie-mk-4.webp"
    ],
    consistPrimary: "70% хлопок, 30% полиэстер",
    materialPrimary: "футер 3-хнитка начес, плотность 330-340г/м^2",
    slug: "hoodie-mk"
  },
  {
    id: "8",
    name: "Худи",
    price: 7800,
    type: ["Худи"],
    colors: ["Индиго", "Черный", "Молочный"],
    sizes: ["XL"],
    images: [
      "/hoodie/hoodie-in-1.webp",
      "/hoodie/hoodie-in-2.webp",
      "/hoodie/hoodie-in-3.webp",
      "/hoodie/hoodie-in-4.webp",
      "/hoodie/hoodie-in-5.webp"
    ],
    consistPrimary: "70% хлопок, 30% полиэстер",
    materialPrimary: "футер 3-хнитка начес, плотность 330-340г/м^2",
    slug: "hoodie-in"
  }
]

export default function getGoods(): TcatalogGood[] {
  return goods
}
