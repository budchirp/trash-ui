import type { ComponentProps } from 'react'

export type FieldProps = {
  label?: React.ReactNode | string
  type?: 'column' | 'row'
  children?: React.ReactNode
} & ComponentProps<'div'>
