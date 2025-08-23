import { cva } from 'class-variance-authority'

export const boxContentStyle = cva('w-full', {
  variants: {
    padding: {
      none: 'p-0',
      default: 'p-4',
      sm: 'p-2'
    }
  },
  defaultVariants: {
    padding: 'default'
  }
})
