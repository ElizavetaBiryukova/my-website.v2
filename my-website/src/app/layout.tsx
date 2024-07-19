import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const myFont = localFont({
  src: [
    {
      path: '../assets/fonts/Orbitron-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Orbitron-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Orbitron-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Orbitron-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Orbitron-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Orbitron-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ZenDots-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Website of Elizaveta Biryukova',
  description: 'Hello! This is just the personal website of Lisa Biryukova',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  )
}
