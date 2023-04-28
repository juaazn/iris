import styles from '../styles/Title.module.css'

export default function Title ({ title = 'Título', seeText = true, imgName = 'reference-image', titletex }) {
  return (
    <header className={styles.titleContainer}>
      <img className={styles.image} src={`/${imgName}.webp`} alt='Imagen de referencia' />
      <h1 className={styles.title}>{title}</h1>
      <p className={seeText ? styles.textTitle : styles.textTitle__none}>{titletex}</p>
    </header>
  )
}
