import { ClerkProvider } from '@clerk/nextjs'
import {ptBR} from '@clerk/localizations' 
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'],weight:['400','500','600','700'],variable:'--font-poppins' })

export const metadata: Metadata = {
  title: 'Evently',
  description: 'Evently é uma plataforma para gerenciamento de eventos agrícolas em todo o território Brasileiro.',
  icons: {icon:'/assets/images/logo.svg'}
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={ptBR}>
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
    </ClerkProvider>
  )
}
