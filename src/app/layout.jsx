import { Abhaya_Libre } from 'next/font/google'

import '../styles/globals.css'

import BackgroundBook from '../components/BackgroundBook.jsx'
import MainNavegation from '../components/MainNavegation.jsx'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata = {
  title: {
    template: '%s | Iris',
    default: 'Iris'
  },
  description: 'Derechos de la comunidad lgtbiqa+'
}

const abhayaLibre = Abhaya_Libre({
  preload: false,
  weight: '400',
  style: 'normal'
})

export default function RootLayout ({ children }) {
  return (
    <html lang="es">
      <GoogleAnalytics />
      <body className={abhayaLibre.className}>
      <main className='containerLayout'>
        <BackgroundBook>
            {children}
        </BackgroundBook>
        <MainNavegation />
      </main>
      </body>
    </html>
  )
}
