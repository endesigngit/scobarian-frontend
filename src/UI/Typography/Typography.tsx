import { Ttag } from "@/UI/types"
import clsx from "clsx"
import styles from "./style.module.css"

type Tvariant = "h1" | "subtitle" | "text" | "subtext"
export type TypographyProps<Tag extends Ttag> = React.ComponentProps<Tag> & {
  children: React.ReactNode
  variant: Tvariant
  tag: Ttag
  className?: string
}

export const Typography = <Tag extends Ttag = "span">({
  variant,
  tag,
  children,
  className = "",
  ...props
}: TypographyProps<Tag>) => {
  const Component = tag

  let classByVariant = ""

  if (variant == "h1") classByVariant = styles.variant_h1
  if (variant == "text") classByVariant = styles.variant_text
  if (variant == "subtitle") classByVariant = styles.variant_subtitle

  return (
    // @ts-ignore
    <Component className={clsx(className, classByVariant)} {...props}>
      {children}
    </Component>
  )
}
