import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import styles from './RootLayout.module.css'

import banner from '../../resources/banner.jpg'

function RootLayout() {
  return (
    <div className={styles.base}>
        <header>
            <img src={banner} alt="banner" />
            <div className={styles['navbar-wrapper']}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/search">검색</Link>
                    </li>
                    <li>
                        <Link to="/explorer">탐색</Link>
                    </li>
                    <li>
                        <Link to>Login</Link>
                    </li>
                    <li>
                        <Link>Logout</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
            </div>
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            Text
        </footer>
    </div>
  )
}

export default RootLayout