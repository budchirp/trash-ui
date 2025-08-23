import type React from 'react'

import { cn } from '@/utils/cn'

import type { DividerProps } from '@/components/divider/types'

export const Divider: React.FC<DividerProps> = ({
  className,
  ...props
}: DividerProps): React.ReactNode => {
  return (
    <div {...props} className={cn('w-full px-4 h-[0.5px] bg-outline rounded-full', className)} />
  )
}
