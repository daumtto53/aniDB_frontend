import React from 'react';
import styles from './RelatedSeriesTable.module.css';

const RelatedSeriesTable = (props) => {
  const relatedSeries = props.relatedSeries

  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.headerRow}>
          <th className={styles.headerCell}>Related Series Title</th>
          <th className={styles.headerCell}>Relation</th>
        </tr>
      </thead>
      <tbody>
        {relatedSeries.map((series, index) => (
          <tr key={index} className={styles.row}>
            <td className={styles.cell}>{series.title}</td>
            <td className={styles.cell}>{series.relation}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RelatedSeriesTable;