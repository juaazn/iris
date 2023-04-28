import styles from '../styles/Title.module.css'

export default function Title ({ title = 'Título', seeText = true, imgName = 'reference-image' }) {
  return (
    <header className={styles.titleContainer}>
      <img className={styles.image} src={`/${imgName}.webp`} alt='Imagen de referencia' />
      <h1 className={styles.title}>{title}</h1>
      <p className={seeText ? styles.textTitle : styles.textTitle__none}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, facilis blanditiis. Earum sint aspernatur temporibus culpa enim laborum modi quas iste iusto velit. Dignissimos quidem suscipit excepturi assumenda, ipsa deleniti!
      Assumenda, laboriosam voluptatem id pariatur ducimus quisquam quaerat obcaecati magnam. Debitis incidunt quae magni soluta omnis accusamus molestias unde, eaque officia molestiae ullam ratione reiciendis cumque autem porro maiores quos!</p>
    </header>
  )
}
