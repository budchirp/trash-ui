'use client'

import type React from 'react'
import { useEffect, useRef } from 'react'

import { cn } from '@/utils/cn'

import type { InputProps } from '@/components/input/types'

export const Input: React.FC<InputProps> = ({
  className,
  id,
  value,
  icons: { leading, trailing } = {},
  textarea,
  onKeyDown,
  ...props
}: InputProps): Children => {
  const Component: 'input' = textarea ? 'textarea' : ('input' as any)

  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const handleKeyDown = (event: any) => {
    if (textarea) {
      if (event.key === 'Enter') {
        if (event.shiftKey) {
          event.preventDefault()

          const textarea = textareaRef.current
          if (!textarea) return

          const start = textarea.selectionStart
          const end = textarea.selectionEnd
          const currentValue = textarea.value
          const newValue = `${currentValue.substring(0, start)}\n${currentValue.substring(end)}`
          textarea.value = newValue
          textarea.selectionStart = textarea.selectionEnd = start + 1

          setTimeout(() => {
            textarea.scrollTop = textarea.scrollHeight
          }, 0)
        } else {
          event.preventDefault()

          const form = (event.target as any).form as HTMLFormElement
          if (form) {
            form.requestSubmit()
          }
        }
      }
    }

    if (onKeyDown) {
      onKeyDown(event)
    }
  }

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '2.5rem'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [textarea, value])

  return (
    <div className='relative flex min-h-10 max-h-48 w-full items-center rounded-3xl'>
      {leading && (
        <div className='absolute inset-y-0 left-0 pl-2 flex size-10 items-center justify-center'>
          {leading}
        </div>
      )}

      <Component
        {...props}
        id={id}
        value={value}
        ref={textarea && (textareaRef as any)}
        onKeyDown={handleKeyDown}
        className={cn(
          'bg-surface-primary text-primary h-auto placeholder-tertiary border-outline focus:border-outline-hover hover:border-outline-hover flex w-full items-center rounded-3xl border py-2 transition duration-300 resize-none overflow-auto',
          trailing && 'pr-12 pl-4',
          leading && 'pl-12 pr-4',
          !leading && !trailing && 'px-4',
          className
        )}
      />

      {trailing && (
        <div className='absolute inset-y-0 right-0 pr-2 flex size-10 items-center justify-center overflow-hidden'>
          {trailing}
        </div>
      )}
    </div>
  )
}
Input.displayName = 'Input'
