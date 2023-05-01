import styles from '@/styles/IframeDataViz.module.css'

export default function IframeDataViz ({ urlDataViz }) {
  return (
    <>
      <iframe className={styles.iframe} title='DATA VIZ 2' src={`${urlDataViz}`} type='text/html' allowfullscreen='true'></iframe>
    </>
  )
}
