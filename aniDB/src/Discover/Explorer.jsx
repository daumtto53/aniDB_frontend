import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Explorer.module.css"

function Explorer() {
  return (
    <div className={styles.container}>
        <div className={styles['link-container']}>
            <NavLink to="/discover/publication?type=Manga" className={styles.link}>Manga</NavLink>
            <NavLink to="/discover/publication?type=Light%20Novel" className={styles.link}>Light Novel</NavLink>
            <NavLink to="/discover/anime" className={styles.link}>Anime</NavLink>
            <NavLink to="/discover/publisher" className={styles.link}>Publisher</NavLink>
            <NavLink to="/artist" className={styles.link}>Artist</NavLink>
        </div>
        <div className={styles['main-area']}>

        </div>
    </div>
  )
}

export default Explorer 