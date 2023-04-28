import styles from '@/styles/VideoDraw.module.css'

export default function VideoDraw ({ name, urlIframe }) {
  return (
    <iframe className={styles.drawMyLife}
      title={`Draw my life ${name}`}
      src={urlIframe}
      allowfullscreen='true'
      csp/>
  )
}
