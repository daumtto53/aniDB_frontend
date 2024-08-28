import React from 'react';
import styles from './AnimeAdaptationTable.module.css';

const AnimeAdaptationTable = ({ animeAdaptationList }) => {
  const getAnimeType = (type) => {
    switch(type) {
      case 1: return 'TV';
      case 2: return 'OVA';
      case 3: return 'Movie';
      case 4: return 'Special';
      case 5: return 'ONA';
      default: return 'Unknown';
    }
  };

  const formatYear = (year) => year ? year : 'N/A';

  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.headerRow}>
          <th className={styles.headerCell}>Type</th>
          <th className={styles.headerCell}>Name</th>
          <th className={styles.headerCell}>Publication Start</th>
          <th className={styles.headerCell}>Publication End</th>
          <th className={styles.headerCell}>Anime Start</th>
          <th className={styles.headerCell}>Anime End</th>
        </tr>
      </thead>
      <tbody>
        {animeAdaptationList.map((anime, index) => (
          <tr key={index} className={styles.row}>
            <td className={`${styles.cell} ${styles.cellCenter}`}>{getAnimeType(anime.animeType)}</td>
            <td className={styles.cell}>{anime.animeName}</td>
            <td className={`${styles.cell} ${styles.cellCenter}`}>{formatYear(anime.publicationStart)}</td>
            <td className={`${styles.cell} ${styles.cellCenter}`}>{formatYear(anime.publicationEnd)}</td>
            <td className={`${styles.cell} ${styles.cellCenter}`}>{formatYear(anime.animeStart)}</td>
            <td className={`${styles.cell} ${styles.cellCenter}`}>{formatYear(anime.animeEnd)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AnimeAdaptationTable;