import './globals.css'       
import Providers from '@/providers/Providers'
import { Navbar, Footer } from '@/components/layout'

export const metadata = {
  title: 'Anant Soft Computing',
  description: 'Anant Soft Computing is a leading software development company specializing in custom web applications, AI-driven solutions, and digital transformation services.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
