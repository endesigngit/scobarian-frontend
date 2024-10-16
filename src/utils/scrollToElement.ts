export default function scrollToElement(ref: any, pos: "start" | "end" | "center") {
  const { current } = ref
  if (current !== null && current !== undefined) {
    current.scrollIntoView({ block: pos, behavior: "smooth" })
  }
}
