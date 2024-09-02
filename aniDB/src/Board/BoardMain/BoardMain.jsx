import React, { useEffect, useState } from "react";
import BoardTable from "./BoardTable";
import Pagination from "./../../BasicComponents/Pagination";

import styles from "./BoardMain.module.css";
import SearchForm from "../../BasicComponents/SearchForm";
import { Link, redirect, useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";
import { articleAxios } from "../../API/API";

/**TODO
 *
 * 1. searchQuery
 * 2. pagination
 */
function BoardMain() {
  const { id } = useParams();

  const { dtoList: initialDtoList, pageInfoDTO: initialPageInfoDTO } = useLoaderData();

  const [dtoList, setDtoList] = useState(initialDtoList);
  const [pageInfoDTO, setPageInfoDTO] = useState(initialPageInfoDTO);
  const [currentPage, setCurrentPage] = useState(initialPageInfoDTO.page || 1);
  const [totalPages, setTotalPages] = useState(initialPageInfoDTO.totalPage || 1);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setCurrentPage(pageInfoDTO.page);
    setTotalPages(pageInfoDTO.totalPage);
  }, [pageInfoDTO.page]);

  const handlePageChange = async (page) => {
    console.log("handlePageChange",page);
    setCurrentPage(page);
    try {
      const config = {
        params: { page }
      };
      const response = await articleAxios.get(`/${id}`, config);

      // Update the state with the new data
      setDtoList(response.data.dtoList);
      setPageInfoDTO(response.data.pageInfoDTO);

      // Optionally update the URL without causing a full navigation
      navigate(`/article/${id}?page=${page}`, { replace: true });
  } catch (error) {
    console.error(error);
  }
}

  return (
    <div className={styles.container}>
      <div className={styles["table-container"]}>
        <BoardTable data={dtoList} />
      </div>
      <div className={styles.centerContainer}>
        <Link className={styles.button} to={`/article/${id}/write`}>
          Write
        </Link>
      </div>
      <div>
        <SearchForm />
      </div>
      <div className={styles["pagination-container"]}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export async function articleLoader({ params, request }) {
  const url = new URL(request.url);
  const id = params.id;
  const page = url.searchParams.get('page') || 1; // Default to page 1 if not provided
  console.log("articleLoader", page);
  
  const config = {
    params: {
      page: page
    }
  }


  try {
    const articleResponse = await articleAxios.get(`/${id}`, config);
    console.log("articleLoader", articleResponse.data);
    return articleResponse.data;
  } catch (error) {
    throw error;
  }
}

export default BoardMain;
