import type React from 'react'

import { cn } from '@/utils/cn'

import type { DividerProps } from '@/components/divider/types'

export const Divider: React.FC<DividerProps> = ({
  className,
  orientation = 'horizontal',
  ...props
}: DividerProps): React.ReactNode => {
  return (
    <div
      {...props}
      className={cn(
        'bg-outline rounded-full',
        orientation === 'horizontal' ? 'h-[0.5px] w-full px-4' : 'h-full w-[0.5px]',
        className
      )}
    />
  )
}
