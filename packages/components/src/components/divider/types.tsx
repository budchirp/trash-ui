import type { ComponentProps } from 'react'

export type DividerProps = ComponentProps<'div'> & {
  className?: string
  orientation?: 'horizontal' | 'vertical'
}
