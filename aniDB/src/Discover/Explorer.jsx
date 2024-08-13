import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Explorer.module.css"

function Explorer() {
  return (
    <div className={styles.container}>
        <div className={styles['link-container']}>
            <NavLink to="/link1" className={styles.link}>Link1</NavLink>
            <NavLink to="/link1" className={styles.link}>Link2</NavLink>
            <NavLink to="/link1" className={styles.link}>Link3</NavLink>
            <NavLink to="/link1" className={styles.link}>Link4</NavLink>
            <NavLink to="/link1" className={styles.link}>Link5</NavLink>
        </div>
        <div className={styles['main-area']}>

        </div>
    </div>
  )
}

export default Explorer 