import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Mon Portfolio',
    description: 'Portfolio professionnel',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr" className="scroll-smooth">
        <body className={inter.className}>
        <Header />
        <main>{children}</main>
        </body>
        </html>
    )
}