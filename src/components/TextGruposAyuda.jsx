import styles from '../styles/TextGruposAyuda.module.css'

import LayoutContent from '@/components/LayoutContent'

export default function TextGruposAyuda ({ texto, link, nameLink, img }) {
  return (
    <LayoutContent>
      <div>
        <ul className={styles.infoContainer}>
          <li className={styles.infoContainer__flex}>
            <p className={styles.text}>{texto}
            <a className={styles.link} href={link} target='_blank' rel='noreferrer'>{nameLink}</a>
            </p>
          </li>
        </ul>
      </div>
    </LayoutContent>
  )
}
