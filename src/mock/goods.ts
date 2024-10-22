import { TcatalogGoodItem } from "../../types/goodItem"

const goods: TcatalogGoodItem[] = [
  {
    id: "1",
    name: "Футболка",
    price: 5800,
    type: "Футболка",
    colors: ["Молочный", "Сталь", "Черный"],
    sizes: ["XS"],
    images: [
      "/uploads/t-shirt/t-shirt-mk-1.webp",
      "/uploads/t-shirt/t-shirt-mk-2.webp",
      "/uploads/t-shirt/t-shirt-mk-3.webp",
      "/uploads/t-shirt/t-shirt-mk-4.webp"
    ],
    compound: "95% хлопок, 5% эластан",
    material: "кулирная гладь с велюр эффектом, плотность 240г/м^2",
    category: "",
    color: "",
    size: "",
    care: "",
    slug: "",
    gender: ""
  },
  {
    id: "5",
    name: "Футболка",
    price: 5800,
    type: "Футболка",
    colors: ["Сталь", "Черный", "Молочный"],
    sizes: ["S"],
    images: [
      "/uploads/t_shirt_st_1_e7f401e72c.webp",
      "/uploads/t_shirt_st_2_b85f0f79e9.webp",
      "/uploads/t_shirt_st_3_8a9023a93c.webp",
      "/uploads/t_shirt_st_4_1f5891e2d7.webp",
      "/uploads/t_shirt_st_5_0a501389a1.webp"
    ],
    color: "",
    size: "",
    care: "",
    compound: "",
    material: "",
    category: "",
    slug: "",
    gender: ""
  },
  {
    id: "6",
    name: "Футболка",
    price: 5800,
    type: "Футболка",
    colors: ["Черный", "Молочный", "Сталь"],
    sizes: ["M"],
    images: [
      "/t-shirt/t-shirt-bl-1.webp",
      "/t-shirt/t-shirt-bl-2.webp",
      "/t-shirt/t-shirt-bl-3.webp",
      "/t-shirt/t-shirt-bl-4.webp"
    ],
    compound: "95% хлопок, 5% эластан",
    material: "кулирная гладь с велюр эффектом, плотность 240г/м^2",
    color: "",
    size: "",
    care: "",
    category: "",
    slug: "",
    gender: ""
  },
  {
    id: "2",
    name: "Бомбер",
    price: 12000,
    type: "Бомбер",
    colors: ["Черный"],
    sizes: ["L"],
    images: [
      "http://admin.skobarian.ru/uploads/bomber_bl_2_4a7c43189d.webp",
      "http://admin.skobarian.ru/uploads/bomber_bl_1_3889d8dc14.webp",
      "http://admin.skobarian.ru/uploads/bomber_bl_3_e42ad1cd6b.webp",
      "http://admin.skobarian.ru/uploads/bomber_bl_4_92b4863d89.webp"
    ],
    compound: "70% хлопок, 30% полиэстер.",
    material: "футер 3-хнитка начес, плотность 330-340г/м^2",
    color: "",
    size: "",
    care: "",
    category: "",
    slug: "",
    gender: ""
  },
  {
    id: "3",
    name: "Худи",
    price: 7800,
    type: "Худи",
    colors: ["Черный", "Молочный", "Индиго"],
    sizes: ["L"],
    images: [
      "/hoodie/hoodie-bl-1.webp",
      "/hoodie/hoodie-bl-2.webp",
      "/hoodie/hoodie-bl-3.webp",
      "/hoodie/hoodie-bl-4.webp"
    ],
    compound: "70% хлопок, 30% полиэстер",
    material: "футер 3-хнитка начес, плотность 330-340г/м^2",
    color: "",
    size: "",
    care: "",
    category: "",
    slug: "",
    gender: ""
  },
  {
    id: "7",
    name: "Худи",
    price: 7800,
    type: "Худи",
    colors: ["Молочный", "Индиго", "Черный"],
    sizes: ["M"],
    images: [
      "/hoodie/hoodie-mk-1.webp",
      "/hoodie/hoodie-mk-2.webp",
      "/hoodie/hoodie-mk-3.webp",
      "/hoodie/hoodie-mk-4.webp"
    ],
    compound: "70% хлопок, 30% полиэстер",
    material: "футер 3-хнитка начес, плотность 330-340г/м^2",
    color: "",
    size: "",
    care: "",
    category: "",
    slug: "",
    gender: ""
  },
  {
    id: "8",
    name: "Худи",
    price: 7800,
    type: "Худи",
    colors: ["Индиго", "Черный", "Молочный"],
    sizes: ["XL"],
    images: [
      "/hoodie/hoodie-in-1.webp",
      "/hoodie/hoodie-in-2.webp",
      "/hoodie/hoodie-in-3.webp",
      "/hoodie/hoodie-in-4.webp",
      "/hoodie/hoodie-in-5.webp"
    ],
    compound: "70% хлопок, 30% полиэстер",
    material: "футер 3-хнитка начес, плотность 330-340г/м^2",
    color: "",
    size: "",
    care: "",
    category: "",
    slug: "",
    gender: ""
  }
]

export default function getGoods(): TcatalogGoodItem[] {
  return goods
}
