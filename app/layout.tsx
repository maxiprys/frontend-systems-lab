import type { Metadata } from 'next'

import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
