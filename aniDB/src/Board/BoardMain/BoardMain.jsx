import React from 'react'
import BoardTable from './BoardTable'
import Pagination from './../../BasicComponents/Pagination';

 
import styles from "./BoardMain.module.css";
import SearchForm from '../../BasicComponents/SearchForm';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { articleAxios } from '../../API/API';

 const tableData = [
    { number: 1, title: 'Title 1', author: 'Author 1', recommended: 'Yes', views: 100, createdTime: '2024-08-13' },
    { number: 2, title: 'Title 2', author: 'Author 2', recommended: 'No', views: 200, createdTime: '2024-08-12' },
    // ... add 8 more rows to make 10 total
  ];

/**TODO
 * 
 * 0. write
 * 1. searchQuery
 * 2. pagination
 */
function BoardMain() {
  const {dtoList, pageInfoDTO} = useLoaderData();
  console.log(dtoList);
  console.log(pageInfoDTO);

  const { id } = useParams();

  return (
    <div className={styles.container}>
        <div className={styles['table-container']}>
            <BoardTable data={dtoList}/>
        </div>
        <div className={styles.centerContainer}>
          <Link className={styles.button} to={`/article/${id}/write`}>Write</Link>
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

export async function articleLoader({ params, request }) {
  const url = new URL(request.url);
  const id = params.id;
  console.log(id);

  try {
    const articleResponse = await articleAxios.get(`/${id}`);
    // console.log(articleResponse.data);
    return articleResponse.data;
  } catch (error) {
    throw error;
  }
}



export default BoardMain