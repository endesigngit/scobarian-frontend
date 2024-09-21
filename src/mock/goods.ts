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
    sizes: ["XS"],
    images: [
      "/t-shirt/t-shirt-st-1.webp",
      "/t-shirt/t-shirt-st-2.webp",
      "/t-shirt/t-shirt-st-3.webp",
      "/t-shirt/t-shirt-st-4.webp",
      "/t-shirt/t-shirt-st-5.webp"
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
    sizes: ["XS"],
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
    sizes: ["XS"],
    images: [
      "/bomber/bomber-bl-2.webp",
      "/bomber/bomber-bl-1.webp",
      "/bomber/bomber-bl-3.webp",
      "/bomber/bomber-bl-4.webp"
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
    sizes: ["XS"],
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
    sizes: ["XS"],
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
    sizes: ["XS"],
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
