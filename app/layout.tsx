import "@/styles/globals.css"
import { Inter } from 'next/font/google'
import type React from "react"
import Navigation from "./components/navigation"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sumit Yadav </title>
      </head>
      <body className={inter.className}>
        
        {children}
      </body>
    </html>
  )
}