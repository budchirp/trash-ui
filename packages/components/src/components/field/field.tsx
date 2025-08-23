import type React from 'react'

import { cn } from '@/utils/cn'

import type { FieldProps } from '@/components/field/types'
import { Column } from '@/components/column'
import { Label } from '@/components/label'

export const Field: React.FC<FieldProps> = ({
  children,
  className,
  type = 'column',
  label,
  id,
  ...props
}: FieldProps): Children => {
  return (
    <div
      {...props}
      className={cn(
        'flex gap-2',
        type === 'column' ? 'flex-col' : 'flex-row items-center',
        className
      )}
    >
      {type === 'column' && (
        <>
          {typeof label === 'string' ? <Label id={id}>{label}</Label> : label}

          {children}
        </>
      )}

      {type === 'row' && (
        <>
          {children}

          {typeof label === 'string' ? <Label id={id}>{label}</Label> : label}
        </>
      )}
    </div>
  )
}
