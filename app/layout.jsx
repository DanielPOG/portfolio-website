import React from "react"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";


export const metadata = {
  title: "Mi Portafolio | Programador Full Stack",
  description:
    "Portafolio profesional de programador especializado en desarrollo web moderno con React, Next.js y Tailwind CSS",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
