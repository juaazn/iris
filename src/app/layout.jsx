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
  keywords: ['lgtb', 'LGTB', 'LGTBIQA+', 'lgtbiqa+', 'gay', 'lesbiana', 'libro', 'libros', 'historias', 'relatos', 'información', 'personas', 'iris', 'proyecto', 'vivencias', 'colombia', 'bogotá', 'medellín', 'derechos', 'comunidad', 'escribir'],
  description: 'Historias de la comunidad LGTBIQA+. Aquí podras leer, informarte, visualizar historias o podcast donde enontras a decenas de personas narrar sus historias',
  colorScheme: 'light',
  creator: 'Juan Diego Acosta Liscano',
  authors: [{ name: 'Juan Diego Acosta' }, { name: 'Javier Lozano Guarnizo' }],
  type: 'article',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  category: 'social',
  applicationName: 'Iris'
}

const abhayaLibre = Abhaya_Libre({
  preload: false,
  weight: '400',
  style: 'normal'
})

export default function RootLayout ({ children }) {
  return (
    <html className={abhayaLibre.className} lang="es">
      <GoogleAnalytics />
      <body>
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
