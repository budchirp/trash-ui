import type { ComponentProps } from 'react'

export type InputProps = {
  icons?: {
    leading?: Children
    trailing?: Children
  }
  textarea?: boolean
} & ComponentProps<'input'>
