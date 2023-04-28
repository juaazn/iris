import styles from '../styles/Card.module.css'

import ButtonUser from './ButtonUser'

export default function CardInfoUser ({ name = 'Alfonso lopez', left = true, imageLeft = true, butt = true, nameButt, nameEnlace, imgName = 'image-user' }) {
  return (
    <section className={styles.container}>
      <div className={left ? styles.content__users : styles.content__users__left}>
          <h4 className={styles.title}>{name}</h4>
          <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit voluptatum laboriosam corporis officia eum inventore non modi veniam sequi maiores saepe quasi quas, earum autem reiciendis, vel omnis cum soluta.
          Sed voluptate iusto atque minus totam sit repellat necessitatibus. Nihil, magni eveniet quidem exercitationem officia modi, quaerat voluptatum culpa voluptas iste vel quis delectus rem ipsum ipsam debitis quam tempore!</p>
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
