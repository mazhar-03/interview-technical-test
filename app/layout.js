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
    {/* body'ye flex flex-col ekleyerek içeriklerin dikeyde sıralanmasını sağlayın */}
    <body className="min-h-screen bg-gray-100 flex flex-col">
    <Navbar/>
    {/* Ana içerik alanı (sayfalarınız burada render edilecek) */}
    {/* flex-grow ile Navbar ve Footer arasındaki tüm boşluğu doldurmasını sağlayın */}
    <main className="flex-grow p-6"> {/* p-6 tüm sayfa içeriğine dolgu ekler */}
      {children}
    </main>
    <Footer/>
    </body>
    </html>
  )
}
