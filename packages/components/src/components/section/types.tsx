import type { ComponentProps } from 'react'

export type SectionProps = {
  children?: React.ReactNode
  title?: React.ReactNode | string
  description?: React.ReactNode | string
  divider?: boolean
  subsection?: boolean
} & ComponentProps<'div'>
