import type { ComponentProps } from 'react'

export type ContainerProps = {
  children?: React.ReactNode
} & ComponentProps<'div'>
