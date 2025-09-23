import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3002'),
  title: 'Resume Builder Pro - Professional Resume Creator by Ali Hashmi',
  description: 'Create stunning, ATS-optimized resumes with multiple templates and cloud sync. Build your perfect resume in minutes.',
  keywords: 'resume builder, CV creator, professional resume, ATS optimized, job application',
  authors: [{ name: 'Resume Builder Pro' }],
  openGraph: {
    title: 'Resume Builder Pro - Professional Resume Creator by Ali Hashmi',
    description: 'Create stunning, ATS-optimized resumes with professional templates',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}