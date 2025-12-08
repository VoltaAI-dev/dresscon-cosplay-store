import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'

const headerFont = Poppins({ subsets: ['latin'], variable: '--font-heading' })
const bodyFont = Inter({ subsets: ['latin'], variable: '--font-body' })

export const metadata: Metadata = {
  title: 'Dresscon Cosplay Store',
  description: 'An online store selling tailor-made cosplay for disney princesses. ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${headerFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  )
}