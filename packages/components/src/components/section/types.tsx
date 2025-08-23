import type { ComponentProps } from 'react'

export type SectionProps = {
  children?: Children
  title?: Children
  description?: Children
  divider?: boolean
  subsection?: boolean
} & ComponentProps<'div'>
