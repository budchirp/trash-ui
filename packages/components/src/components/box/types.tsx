import type { ComponentProps } from 'react'

import type { VariantProps } from 'class-variance-authority'

import type { boxStyle } from '@/components/box/box.style'
import type { boxContentStyle } from '@/components/box/box-content.style'

export type BoxProps = {
  children?: Children
} & ComponentProps<'div'> &
  VariantProps<typeof boxStyle>

export type BoxContentProps = {
  children?: Children
} & ComponentProps<'div'> &
  VariantProps<typeof boxContentStyle>
