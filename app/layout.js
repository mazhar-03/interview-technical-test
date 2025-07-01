import '@/styles/globals.scss'
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: "Kangurus - Technical Test",
  description: "Technical Test",
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body className="min-h-screen bg-gray-100 flex flex-col">
    <Navbar/>
    <main className="flex-grow p-6">
      {children}
    </main>
    <Footer/>
    </body>
    </html>
   )
}
