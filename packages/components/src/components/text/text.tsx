import type React from 'react'

import { cn } from '@/utils/cn'

import type { TextProps } from '@/components/text/types'

export const Text: React.FC<TextProps> = ({
  children,
  className,
  ...props
}: TextProps): React.ReactNode => {
  return (
    <p {...props} className={cn(className)}>
      {children}
    </p>
  )
}
