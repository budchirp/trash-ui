import type React from 'react'

import { cn } from '@/utils/cn'

import { columnStyle } from './column.style'

import type { ColumnProps } from '@/components/column/types'

export const Column: React.FC<ColumnProps> = ({
  children,
  className,
  padding,
  ...props
}: ColumnProps): React.ReactNode => {
  return (
    <div {...props} className={cn(columnStyle({ className, padding }))}>
      {children}
    </div>
  )
}
