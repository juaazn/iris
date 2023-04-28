import styles from '../styles/LayoutContent.module.css'

export default function LayoutContent ({ children, imgBackground }) {
  return (
    <article style={{ backgroundImage: `url('/${imgBackground}.webp')`, backgroundRepeat: 'no-repeat', objectFit: 'cover' }} className={styles.container__layout}>
      <div className={styles.content__card}>
        {children}
      </div>
    </article>
  )
}
