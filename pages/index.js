import { Simple } from "../components/simple"
import { Complex } from "../components/complex"
import { Nested } from "../components/nested"

import styles from "../styles/index.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
     <Simple />
     <Complex />
     <Nested />
    </div>
  )
}
