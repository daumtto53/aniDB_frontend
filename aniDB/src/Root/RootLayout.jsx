import React from "react";
import { Link, Outlet } from "react-router-dom";
import axios from 'axios';

import styles from "./RootLayout.module.css";


import banner from "../../resources/banner.jpg";

const handleLogin = () => {
	window.location.href = `${import.meta.env.VITE_BASEURL}/${import.meta.env.VITE_LOGIN_API_NAVER}`
}

const handleLogout = async () => {
	const axiosObject = axios.create({
		baseURL: `${import.meta.env.VITE_BASEURL}`,
		withCredentials: true
	});

	try {
		const response = await axiosObject.post('/api/logout');
    window.location.href = `${import.meta.env.VITE_FRONTURL}/logout`;
	} catch (error) {
		console.log('Error logging out', error);
	}
}

function RootLayout() {
  return (
    <div className={styles.base}>
      <header>
        <img src={banner} alt="banner" />
        <div className={styles["navbar-wrapper"]}>
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
              <Link
                onClick={() => {
                  handleLogin();
                }}
              >
                Login
              </Link>
            </li>
            <li>
              <Link onClick={() => {handleLogout()}}>Logout</Link>
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
      <footer>Text</footer>
    </div>
  );
}

export default RootLayout;
