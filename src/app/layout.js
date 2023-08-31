import './globals.css'
import {Inter} from 'next/font/google'
import Notification from "@/components/Notification";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Pizza Fjoset',
    description: 'Pizza Fjoset, Bø i Telemark',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Notification/>
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    )
}
