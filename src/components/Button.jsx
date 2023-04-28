import styles from '../styles/Button.module.css'

import Link from 'next/link'

export default function Button ({ name = 'Botón', page }) {
  return (
    <Link className={styles.mainButton} href={`${page}`}>{name}</Link>
  )
}
