import styles from '../styles/StoryTitle.module.css'

export default function StoryTitle ({ name = 'Color', svgName, nameColor = 'red' }) {
  return (
    <div className={styles.contiener}>
        <div className={styles.container__img}>
          <img src={`/corazon-${svgName}.svg`} alt={`Título que describe las emociones con un color $
        {name}`} />
        </div>
        <h2 style={{ color: nameColor }} className={styles.subtitle}>{name}</h2>
        <div className={styles.corazon}></div>
    </div>
  )
}
