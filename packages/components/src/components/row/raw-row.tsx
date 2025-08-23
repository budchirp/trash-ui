import type React from 'react'

import { cn } from '@/utils/cn'

import type { RowProps } from '@/components/row/types'

export const RawRow: React.FC<RowProps> = ({
  children,
  className,
  ...props
}: RowProps): React.ReactNode => {
  return (
    <div {...props} className={cn('flex items-center', className)}>
      {children}
    </div>
  )
}
