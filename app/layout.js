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
      <body className="">
        <Navbar className="relative z-10" />
        <main className="w-full">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
   )
}
