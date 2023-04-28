import styles from '../styles/Button.module.css'

export default function Button ({ name = 'Botón' }) {
  return (
    <a className={styles.mainButton} href='#'>{name}</a>
  )
}
