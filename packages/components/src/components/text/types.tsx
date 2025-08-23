import type { ComponentProps } from 'react'

export type TextProps = {
  children?: React.ReactNode
} & ComponentProps<'p'>
