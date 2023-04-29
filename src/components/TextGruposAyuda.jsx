import styles from '../styles/TextGruposAyuda.module.css'

import LayoutContent from '@/components/LayoutContent'

export default function TextGruposAyuda ({ texto, link, nameLink, img }) {
  return (
    <LayoutContent>
        <ul className={styles.infoContainer}>
          <li className={styles.infoContainer__flex}>
            <a className={styles.link} href={link} target='_blank' rel='noreferrer'>{nameLink}</a>
            <p className={styles.text}>{texto}
            </p>
          </li>
        </ul>
    </LayoutContent>
  )
}
