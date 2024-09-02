import React from 'react'
import BoardTable from './BoardTable'
import Pagination from './../../BasicComponents/Pagination';

 
import styles from "./BoardMain.module.css";
import SearchForm from '../../BasicComponents/SearchForm';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { articleAxios } from '../../API/API';

/**TODO
 * 
 * 1. searchQuery
 * 2. pagination
 */
function BoardMain() {
  const {dtoList, pageInfoDTO} = useLoaderData();
  // console.log(dtoList);
  // console.log(pageInfoDTO);

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

  try {
    const articleResponse = await articleAxios.get(`/${id}`);
    // console.log(articleResponse.data);
    return articleResponse.data;
  } catch (error) {
    throw error;
  }
}



export default BoardMain