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
      <Navbar />
      <Image
        src="/Image/bg_image.png"
        alt="Background"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />

      <main className="flex-grow ">
        {children}
      </main>
    </div>
    <Footer/>
    </body>
    </html>
   )
}
