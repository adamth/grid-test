import styles from '../styles/simple.module.css'

export const Simple = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>A</div>
      <div className={styles.box}>B</div>
      <div className={styles.box}>C</div>
      <div className={styles.box}>D</div>
      <div className={styles.box}>E</div>
      <div className={styles.box}>F</div>
    </div>
  )
}
