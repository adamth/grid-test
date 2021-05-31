import React from 'react'
import { Complex } from "./complex";
import { Simple } from "./simple";
import styles from '../styles/nested.module.css';

export const Nested = () => {
  return (
    <div className={styles.wrapper}>
      <Complex />
      <Complex />
      <Complex />
      <Simple />
      <Simple />
      <Simple />
    </div>
  )
}
