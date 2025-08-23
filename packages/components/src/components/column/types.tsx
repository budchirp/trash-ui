import type { ComponentProps } from 'react'

import type { VariantProps } from 'class-variance-authority'

import type { columnStyle } from '@/components/column/column.style'

export type RawColumnProps = ComponentProps<'div'> & {
  children?: Children
}

export type ColumnProps = VariantProps<typeof columnStyle> & RawColumnProps
