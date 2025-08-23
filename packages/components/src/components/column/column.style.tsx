import { cva } from 'class-variance-authority'

export const columnStyle = cva('flex flex-col gap-4 py-4', {
  variants: {
    padding: {
      none: 'p-0',
      default: 'py-4'
    }
  },
  defaultVariants: {
    padding: 'default'
  }
})
