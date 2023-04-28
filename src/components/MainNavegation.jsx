'use client'
import { useState } from 'react'
import Link from 'next/link'

import styles from '../styles/MainNavegation.module.css'

const MainNavegation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={styles.containerNav}>
      <button onClick={handleClick} className={styles.containerNav__barButton}>
        <img className={styles.containerNav__imgButtom} src="/menu.svg" alt="Botón abrir menú" />
      </button>
      <aside className={isOpen ? styles.contanerNav__sidebar : styles.sidebarActive}>
        <ul>
          <Link href='/'>Inicio</Link>
          <Link href='/historias'>Historias</Link>
          <Link href='/relatos-de-la-comunidad'>Relatos de la comunidad</Link>
          <Link href='/diccionario'>Diccionario</Link>
          <Link href='/podcast'>Podcast</Link>
          <Link href='/grupos-de-ayuda'>Grupos de ayuda</Link>
        </ul>
      </aside>
    </nav>
  )
}

export default MainNavegation
