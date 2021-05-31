import styles from '../styles/complex.module.css'

export const Complex = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.box} ${styles.a}`}>A</div>
      <div className={`${styles.box} ${styles.b}`}>B</div>
      <div className={`${styles.box} ${styles.c}`}>C</div>
      <div className={`${styles.box} ${styles.d}`}>D</div>
    </div>
  )
}
