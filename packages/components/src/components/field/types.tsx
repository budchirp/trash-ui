import type { ComponentProps } from 'react'

export type FieldProps = ComponentProps<'div'> & {
  label?: Children | string
  type?: 'column' | 'row'
}
