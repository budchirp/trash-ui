import type { ComponentProps } from 'react'

export type DividerProps = {
  className?: string
  orientation?: 'horizontal' | 'vertical'
} & ComponentProps<'div'>
