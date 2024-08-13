import React from "react";

import styles from "./Profile.module.css";

function Favorites() {
  return (
    <>
      <div className={styles.favorites}>
        <h2 className={styles.favoritesTitle}>Favorites</h2>
        <div className={styles.favoritesSection}>
          <h3 className={styles.favoritesCategory}>Anime (6)</h3>
          <div className={styles.favoritesList}>
            <a href="">
              <img
                src="https://via.placeholder.com/100x150"
                alt="Anime1"
                className={styles.favoriteItem}
              />
            </a>
            <a href="">
              <img
                src="https://via.placeholder.com/100x150"
                alt="Anime2"
                className={styles.favoriteItem}
              />
            </a>
            <a href="">
              <img
                src="https://via.placeholder.com/100x150"
                alt="Anime3"
                className={styles.favoriteItem}
              />
            </a>
            <a href="">
              <img
                src="https://via.placeholder.com/100x150"
                alt="Anime4"
                className={styles.favoriteItem}
              />
            </a>
          </div>
        </div>
        <div className={styles.favoritesSection}>
          <h3 className={styles.favoritesCategory}>Manga (2)</h3>
          <div className={styles.favoritesList}>
            <img
              src="https://via.placeholder.com/100x150"
              alt="Manga1"
              className={styles.favoriteItem}
            />
            <img
              src="https://via.placeholder.com/100x150"
              alt="Manga2"
              className={styles.favoriteItem}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Favorites;
