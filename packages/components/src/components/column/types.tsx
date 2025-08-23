import type { ComponentProps } from 'react'

import type { VariantProps } from 'class-variance-authority'

import type { columnStyle } from '@/components/column/column.style'

export type RawColumnProps = {
  children?: React.ReactNode
} & ComponentProps<'div'>

export type ColumnProps = RawColumnProps & VariantProps<typeof columnStyle>
