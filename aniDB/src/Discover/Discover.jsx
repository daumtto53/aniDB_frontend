import React, { useState } from "react";

import styles from "./Discover.module.css";
import Pagination from "../BasicComponents/Pagination";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { discoverAxios } from "../API/API";

export default function Discover() {
  /* query params */
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("type"));

  /* For Pagination */
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(100);

  /* Loader에서 정보 가져오기. */
  const loaderData = useLoaderData();
  console.log('loaderData = ', loaderData);
  const pageItems = loaderData['dtoList'];
  const pageInfo = loaderData['pageInfoDTO'];

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Load Page for new page.
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {pageItems.map((item) => (
          <div key={item.publicationId}>
            <p className={styles.ranking}>ranking : {item.ranked}</p>
            <img
              className={styles.image}
              src={item.coverImageUrl}
              alt={`Image ${item.id}`}
            />
            <Link to={`/info/${item.publicationId}`}>{item.title}</ Link>
          </div>
        ))}
      </div>

      {/* Form Tag로 수정. */}
      <div className={styles.controls}>
        <select className={styles.dropdown}>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <input
          type="text"
          placeholder="Search"
          className={styles.searchInput}
        />
        <button className={styles.button}>Button Text</button>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export async function discoverLoader({ params, request }) {
  const subjectPath = params.subject;

  const url = new URL(request.url);
  const type = url.searchParams.get("type");
  let requestPageNum = url.searchParams.get("page");
  const option = url.searchParams.get("option");
  const searchQuery = url.searchParams.get("searchQuery");

  requestPageNum = requestPageNum === null ? 1 : requestPageNum;

  const config = {
    params: {
      page: requestPageNum,
      option: option,
      searchQuery: searchQuery,
      typeString: type,
    },
  };

  
  try {
    switch (subjectPath) {
      case 'publication' :
        const publicationResponse = await discoverAxios.get("/publication", config);
        console.log(publicationResponse.data);
        return publicationResponse.data;
      case 'anime':

      case 'publisher':
        const publisherResponse = await discoverAxios.get("/publisher", config);
        console.log(publisherResponse)
        return publisherResponse.data;

      case 'artist': 
    }
  } catch (error) {
    throw error;
  }
}
