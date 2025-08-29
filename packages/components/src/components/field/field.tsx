import type React from 'react'

import { cn } from '@/utils/cn'

import type { FieldProps } from '@/components/field/types'
import { Label } from '@/components/label'
import { Column } from '../column'

export const Field: React.FC<FieldProps> = ({
  children,
  className,
  type = 'column',
  label,
  error,
  id,
  ...props
}: FieldProps): Children => {
  return (
    <Column className='gap-2'>
      <div
        {...props}
        className={cn(
          'flex gap-2 w-full',
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

      {error && <div className='text-red-500'>{error}</div>}
    </Column>
  )
}
