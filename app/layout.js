import '@/styles/globals.scss'
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Image from 'next/image';

export const metadata = {
  title: "Kangurus - Technical Test",
  description: "Technical Test",
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body className="min-h-screen flex flex-col">
    <div className="relative flex-1">
      <Image
        src="/Image/bg.jpg"
        alt="Background"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
      />

      <Image
        src="/Image/kangaroo.png"
        alt="Kangaroo overlay"
        fill
        sizes="120vw"
        className="absolute inset-0 z-0 object-cover brightness-125"
      />
      <Navbar className="relative z-10" />
      <main className="w-full h-screen">
        {children}
      </main>
    </div>
    <Footer/>
    </body>
    </html>
   )
}
