export default function getWordByCount(number: number, one: string, two: string, all: string) {
  let n = Math.abs(number)
  n %= 100
  if (n >= 5 && n <= 20) {
    return all
  }
  n %= 10
  if (n === 1) {
    return one
  }
  if (n >= 2 && n <= 4) {
    return two
  }
  return all
}
