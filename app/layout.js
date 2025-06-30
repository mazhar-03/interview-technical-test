import '@/styles/globals.scss'
import Navbar from '@/app/components/Navbar';

export const metadata = {
  title: "Kangurus - Technical Test",
  description: "Technical Test",
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body className="min-h-screen bg-gray-100">
    <Navbar/>
    <main className="p-6">{children}</main>
    </body>
    </html>
  )
}
