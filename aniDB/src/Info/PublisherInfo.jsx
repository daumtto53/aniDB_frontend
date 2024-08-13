import React from 'react';
import styles from"./PublisherInfo.module.css" // Assuming you have a CSS file for styling

const InfoPage = () => {
  const licensedSeries = [
    "Ayamachi -Yowami o Nigirare, Rouraku Sareru Shoujo-",
    "Deka Tsuyo Mama wa Boku ni Amai.",
    "Deredere Maid to Tsuntsun Maid to Shikotama Ecchi",
    "Dungeon Meshi dj - Marcille Meshi",
    "Futanari Kyokon Kuro Gal",
    "Kigen no Warui Kuro Gal Futanari Kanojo ni Karaoke ni Yobidasareta Kekka...",
    "Kouhai wa Koakuma mal!?",
    // Continue the list...
  ];

  return (
    <div className={styles['info-page']}>
      <header>
        <h1>2D Market</h1>
        <a href="#edit-title"></a>
      </header>

      <section className={styles['attributes']}>
        <div className={styles['attribute-group']}>
          <div className={styles['attribute']}>
            <strong>Alternate Names</strong> <a href="#edit-alternate-names"></a>
            <p>N/A</p>
          </div>
          <div className={styles['attribute']}>
            <strong>Notes</strong> <a href="#edit-notes"></a>
            <p>N/A</p>
          </div>
        </div>

        <div className={styles['attribute-group']}>
          <div className={styles['attribute']}>
            <strong>Type</strong> <a href="#edit-type"></a>
            <p>English</p>
          </div>
          <div className={styles['attribute']}>
            <strong>Website</strong> <a href="#edit-website"></a>
            <p><a href="#website-link">Click Here</a></p>
          </div>
        </div>

        <div className={styles['attribute-group']}>
          <div className={styles['attribute']}>
            <strong>Last Updated</strong> <a href="#edit-last-updated"></a>
            <p>N/A</p>
          </div>
        </div>
      </section>

      <section className={styles['licensed-series']}>
        <strong>Licensed Series</strong>
        <ul>
          {licensedSeries.map((series, index) => (
            <li key={index}>{series}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default InfoPage;