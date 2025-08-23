import type React from 'react'

import { headingStyle } from '@/components/heading/heading.style'
import { cn } from '@/utils/cn'

import type { HeadingProps } from '@/components/heading/types'

export const Heading: React.FC<HeadingProps> = ({
  children,
  className,
  size,
  ...props
}: HeadingProps): React.ReactNode => {
  return (
    <h1 {...props} className={cn(headingStyle({ className, size }))}>
      {children}
    </h1>
  )
}
