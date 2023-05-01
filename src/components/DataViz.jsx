import styles from '@/styles/DataViz.module.css'

export default function DataViz ({ children }) {
  return (
    <article className={styles.containerDataViz}>
      {children}
    </article>
  )
}
