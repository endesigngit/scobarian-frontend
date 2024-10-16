export default function formatPriceNum(price: number) {
  return new Intl.NumberFormat("ru-RU").format(price)
}
