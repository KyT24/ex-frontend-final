import './globals.css'
import Navbar from '@/src/components/Navbar'
import ToastProvider from '@/src/components/ToastProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="root-shell bg-ink text-text">
        <Navbar />
        <main>{children}</main>
        <ToastProvider />
      </body>
    </html>
  )
}