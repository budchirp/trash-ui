import type { ComponentProps } from 'react'

export type FieldProps = {
  label?: Children | string
  type?: 'column' | 'row'
  children?: Children
} & ComponentProps<'div'>
