import type React from 'react'

import type { Metadata } from 'next'

import { ToastProvider } from '@trash-ui/components'

import '@/app/globals.css'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <ToastProvider />

        {children}
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Trash UI',
  description: 'Trash UI'
}
