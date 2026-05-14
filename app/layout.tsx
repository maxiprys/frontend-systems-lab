import type { Metadata } from 'next'

import './globals.css'

import { ReactQueryProvider } from '@/lib/react-query'

export const metadata: Metadata = {
  title: 'Frontend Systems Lab',
  description: 'Interactive frontend engineering playground',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  )
}
