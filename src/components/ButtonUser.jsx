import Link from 'next/link'

import styles from '../styles/ButtonUser.module.css'

export default function ButtonUser ({ see = true, enlace, name = 'Leer Historia' }) {
  return (
    <button className={see ? styles.userButton : styles.userButton__none}><Link href={`/${enlace}`}>{name}</Link></button>
  )
}
