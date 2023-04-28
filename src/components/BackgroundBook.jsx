import styles from '../styles/BackgroundBook.module.css'

export default function BackgroundBook ({ children }) {
  return (
    <section className={styles.backgrBook}>
      {children}
    </section>
  )
}
