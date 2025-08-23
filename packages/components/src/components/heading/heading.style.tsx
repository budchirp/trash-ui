import { cva } from 'class-variance-authority'

export const headingStyle = cva('', {
  variants: {
    size: {
      h1: 'text-3xl font-bold',
      h2: 'text-2xl font-bold',
      h3: 'text-lg font-semibold text-secondary',
      h4: 'text-base font-medium text-tertiary'
    }
  },
  defaultVariants: {
    size: 'h2'
  }
})
