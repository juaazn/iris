'use client'

import styles from '@/styles/CookieBanner.module.css'

import Link from 'next/link'

import { getLocalStorage, setLocalStorage } from '@/lib/storageHelper'
import { useState, useEffect } from 'react'

const CookieBanner = () => {
  const [cookieConsent, setCookieConsent] = useState(false)

  useEffect(() => {
    const storedCookieConsent = () => {
      getLocalStorage('cookie_consent', null)
    }
    storedCookieConsent(setCookieConsent)
  }, [setCookieConsent])

  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied'

    window.gtag('consent', 'update', { 'analytics_storage': newValue })
    setLocalStorage('cookie_consent', cookieConsent)
  }, [cookieConsent])

  return (
    <dialog className={cookieConsent ? styles.cookie__none : styles.cookie}>
      <header>
        <Link className={styles.cookie__link} href='/cookies' target='_blank' rel='noreferrer'>
          <p>Para seguir mejorarando la experiencia. Usamos <span>cookies</span> en nuestro sitio web</p>
        </Link>
      </header>
      <div className={styles.cookie__cont__button}>
        <button onClick={() => setCookieConsent(false)} className={styles.cookie__but} >Denegar</button>
        <button onClick={() => setCookieConsent(true)} className={styles.cookie__but__check} >Aceptar Cookies</button>
      </div>
    </dialog>
  )
}

export default CookieBanner
