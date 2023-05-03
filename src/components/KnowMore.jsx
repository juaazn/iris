import styles from '../styles/KnowMore.module.css'

export default function KnowMore ({ name, left = false }) {
  return (
    <h4 className={left ? styles.knowMore__left : styles.knowMore}>{name}</h4>
  )
}
