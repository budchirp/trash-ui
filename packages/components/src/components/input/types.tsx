import type { ComponentProps } from 'react'

export type InputProps = {
  icons?: {
    leading?: React.ReactNode
    trailing?: React.ReactNode
  }
  textarea?: boolean
} & ComponentProps<'input'>
