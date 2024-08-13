import React from 'react';
import styles from './BoardTable.module.css';

const BoardTable = ({ data }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>TITLE</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Number</th>
            <th>Title</th>
            <th>Author</th>
            <th>Recommended</th>
            <th>Views</th>
            <th>Created Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.number}</td>
              <td>{row.title}</td>
              <td>{row.author}</td>
              <td>{row.recommended}</td>
              <td>{row.views}</td>
              <td>{row.createdTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BoardTable;