import '@/styles/globals.scss'

export const metadata = {
  title: "Kangurus - Technical Test",
  description: "Technical Test",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
