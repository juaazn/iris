import styles from '../styles/home.module.css'

import Button from '../components/Button'

export default function Home () {
  return (
    <div className={styles.cont}>
      <div className={styles.mainPage}>
        <figure className={styles.mainPage__titleContai}>
          <div className={styles.mainPage__imgContainer}>
            <img className={styles.mainPage__imgOjo} src='ojo.svg' alt='Ilustración de un ojo' />
          </div>
          <h1 className={styles.mainPage__title}>IRIS</h1>
        </figure>
        <section className={styles.mainPage__content}>
          <blockquote>“Un mar de historias al cristal de tus ojos”</blockquote>
          <p className={styles.mainPage__textDescription}>Bienvenido lector, has abierto nuestro libro: "Iris", este libro es una colección de historias vividas por personas colombianas como tu y yo las cuales han tenido que pasar por largos caminos para poder ser quien ellos desean. Te invitamos que recorras las paginas de este libro y aprendas de sus historias, esperamos que tras escucharlas puedas ver con nuevos ojos a la realidad que algunas personas tienen que vivir en nuestro país.
          </p>
          <div className={styles.containerMainButton}>
            <h2 className={styles.mainPage__subTitle}>¿QUIERES SABER MÁS?</h2>
            <Button name='Pasar Página' />
          </div>
        </section>
      </div>
    </div>
  )
}
