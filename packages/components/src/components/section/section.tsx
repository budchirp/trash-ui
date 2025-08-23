import type React from 'react'

import { cn } from '@/utils/cn'

import { Column } from '@/components/column'
import { Heading } from '@/components/heading'

import type { SectionProps } from '@/components/section/types'
import { Divider } from '../divider'

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  title,
  description,
  divider = true,
  ...props
}: SectionProps): React.ReactNode => {
  return (
    <Column {...props} padding='none' className={cn('gap-2', className)}>
      <div>
        {typeof title === 'string' ? <Heading>{title}</Heading> : title}
        {typeof description === 'string' ? <Heading size='h4'>{description}</Heading> : description}
      </div>

      {divider && <Divider className='mb-2' />}

      <Column padding='none'>{children}</Column>
    </Column>
  )
}
