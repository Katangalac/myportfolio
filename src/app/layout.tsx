import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import {Analytics} from "@vercel/analytics/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Portfolio-Christian-Kayembe-Katangala',
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
        <Analytics/>
        <Header />
        <main>
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    )
}