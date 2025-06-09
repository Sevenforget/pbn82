import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Sidebar from "@/components/sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CodeCanvas",
  description: "기술과 개발에 관한 개인 블로그",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className} flex flex-col h-screen`}>
        <Header />
        <main className="flex flex-1 overflow-hidden">
          <Sidebar />
          <div className="flex-1 overflow-hidden">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
