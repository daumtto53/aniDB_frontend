import React from 'react'
import BoardTable from './BoardTable'
import Pagination from './../../BasicComponents/Pagination';

 
import styles from "./BoardMain.module.css";
import SearchForm from '../../BasicComponents/SearchForm';

 const tableData = [
    { number: 1, title: 'Title 1', author: 'Author 1', recommended: 'Yes', views: 100, createdTime: '2024-08-13' },
    { number: 2, title: 'Title 2', author: 'Author 2', recommended: 'No', views: 200, createdTime: '2024-08-12' },
    // ... add 8 more rows to make 10 total
  ];

function BoardMain() {
  return (
    <div className={styles.container}>
        <div className={styles['table-container']}>
            <BoardTable data={tableData}/>
        </div>
        <div>
          <SearchForm />
        </div>
        <div className={styles['pagination-container']}>
            <Pagination currentPage={1} totalPages={100}/>
        </div>
    </div>
  )
}

export default BoardMain