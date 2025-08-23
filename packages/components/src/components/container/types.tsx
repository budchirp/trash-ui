import type { ComponentProps } from 'react'

export type ContainerProps = {
  children?: Children
} & ComponentProps<'div'>
