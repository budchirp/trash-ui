import type React from 'react'

import { cn } from '@/utils/cn'

import type { RawColumnProps } from '@/components/column/types'

export const RawColumn: React.FC<RawColumnProps> = ({
  children,
  className,
  ...props
}: RawColumnProps): Children => {
  return (
    <div {...props} className={cn('flex flex-col', className)}>
      {children}
    </div>
  )
}
