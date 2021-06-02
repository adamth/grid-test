import { Simple } from "../components/simple"
import { Complex } from "../components/complex"
import { Nested } from "../components/nested"
import { Stitches } from "../components/Stitches"

import styles from "../styles/index.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
     Vanilla CSS
     <Complex />
     Stitches
     <Stitches />
     {/* <Nested /> */}
    </div>
  )
}
