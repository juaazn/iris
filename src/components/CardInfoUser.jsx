import styles from '../styles/Card.module.css'

import ButtonUser from './ButtonUser'

export default function CardInfoUser ({ name = 'Alfonso lopez', left = true, imageLeft = true, butt = true, nameButt, nameEnlace, imgName = 'image-user', texto }) {
  return (
    <section className={styles.container}>
      <div className={left ? styles.content__users : styles.content__users__left}>
          <h4 className={styles.title}>{name}</h4>
          <p className={styles.text}>{texto}</p>
          <div>
            <ButtonUser see={butt} name={nameButt} enlace={nameEnlace}/>
          </div>
      </div>
      <div className={imageLeft ? styles.container__image : styles.container__image__left}>
        <img className={styles.image} src={`/${imgName}.webp`} alt={`Imagen de ${name}`} />
      </div>
    </section>
  )
}
