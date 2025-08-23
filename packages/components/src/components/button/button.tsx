import type React from 'react'

import { buttonStyle } from '@/components/button/button.style'
import { cn } from '@/utils/cn'

import type { ButtonProps } from '@/components/button/types'

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  shape,
  color,
  ...props
}: ButtonProps): React.ReactNode => {
  return (
    <button {...props} className={cn(buttonStyle({ className, shape, color }))}>
      {children}
    </button>
  )
}
