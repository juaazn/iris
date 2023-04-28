'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import styles from '../styles/BarNavegation.module.css'

const BarNavegation = ({ color = false }) => {
  const pathname = usePathname()

  return (
    <nav className={styles.barRelatos}>
      <ul className={styles.flex__links}>
        <Link className={pathname === '/relatos-de-la-comunidad' ? styles.rojo__active : styles.rojo} href='/relatos-de-la-comunidad'>Rojo</Link>
        <Link className={pathname === '/relatos-de-la-comunidad/naranja' ? styles.naranja__active : styles.naranja} href='/relatos-de-la-comunidad/naranja'>Naranja</Link>
        <Link className={pathname === '/relatos-de-la-comunidad/amarillo' ? styles.amarillo__active : styles.amarillo} href='/relatos-de-la-comunidad/amarillo'>Amarrillo</Link>
        <Link className={pathname === '/relatos-de-la-comunidad/verde' ? styles.verde__active : styles.verde} href='/relatos-de-la-comunidad/verde'>Verde</Link>
        <Link className={pathname === '/relatos-de-la-comunidad/azul' ? styles.azul__active : styles.azul} href='/relatos-de-la-comunidad/azul'>Azul</Link>
        <Link className={pathname === '/relatos-de-la-comunidad/morado' ? styles.morado__active : styles.morado} href='/relatos-de-la-comunidad/morado'>Morado</Link>
      </ul>
    </nav>
  )
}

export default BarNavegation
