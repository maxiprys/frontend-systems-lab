import type { Metadata } from 'next'

import './globals.css'

import { ReactQueryProvider } from '@/lib/react-query'

export const metadata: Metadata = {
  title: 'Frontend Systems Lab',

  description:
    'Interactive frontend engineering playground focused on rendering behavior, async state, streaming, and modern React architecture patterns.',

  keywords: [
    'React',
    'Next.js',
    'TypeScript',
    'Frontend Architecture',
    'React Performance',
    'TanStack Query',
    'Suspense',
    'Streaming',
    'Frontend Engineering',
  ],

  openGraph: {
    title: 'Frontend Systems Lab',

    description:
      'Interactive frontend engineering playground focused on rendering behavior, async state, streaming, and modern React architecture patterns.',

    url: 'https://YOUR_DOMAIN.vercel.app',

    siteName: 'Frontend Systems Lab',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Frontend Systems Lab',
      },
    ],

    locale: 'en_US',

    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Frontend Systems Lab',

    description:
      'Interactive frontend engineering playground focused on rendering behavior, async state, streaming, and modern React architecture patterns.',

    images: ['/og-image.png'],
  },
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
