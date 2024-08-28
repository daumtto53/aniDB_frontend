import React from 'react';
import styles from './AlternativeTitleTable.module.css';

const AlternativeTitleTable = (props) => {

  const alternativeTitles = props.alternativeTitles;

  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.headerRow}>
          <th className={styles.headerCell}>Alternative Title</th>
          <th className={styles.headerCell}>Language</th>
        </tr>
      </thead>
      <tbody>
        {alternativeTitles.map((title, index) => (
          <tr key={index} className={styles.row}>
            <td className={styles.cell}>{title.alternativeTitle}</td>
            <td className={styles.cell}>{title.language}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AlternativeTitleTable;