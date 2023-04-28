import styles from '../styles/KnowMore.module.css'

export default function KnowMore ({ name }) {
  return (
    <h4 className={styles.knowMore}>{name}</h4>
  )
}
