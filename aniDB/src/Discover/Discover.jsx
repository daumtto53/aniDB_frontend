import React, { useEffect, useState } from "react";

import styles from "./Discover.module.css";
import Pagination from "../BasicComponents/Pagination";
import {
  Form,
  Link,
  redirect,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { discoverAxios } from "../API/API";

export default function Discover() {
  /* query params */
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("type"));
  const navigate = useNavigate();

  /* For Pagination */
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(100);

  /* Loader에서 정보 가져오기. */
  const loaderData = useLoaderData();
  console.log("loaderData = ", loaderData);
  const pageItems = loaderData["dtoList"];
  const pageInfo = loaderData["pageInfoDTO"];

  useEffect(() => {
    // This effect runs once when the component mounts
    setCurrentPage(pageInfo.page);
    setTotalPages(pageInfo.totalPage);
  }, [pageInfo.page, pageInfo.totalPage]);

  const handlePageChange = (page) => {
    const url =
      `?page=${page}` +
      `&type=${searchParams.get("type")}` +
      `&option=${searchParams.get("option")}` +
      `&searchQuery=${searchParams.get("searchQuery")}`;
    navigate(url);
    // Load Page for new page.
  };

  return (
    loaderData.subjectPath === "publication" && (
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
              <Link to={`/info/publication/${item.publicationId}`}>{item.title}</Link>
            </div>
          ))}
        </div>

        {/* Form Tag로 수정. */}
        <Form className={styles.controls} method="post">
          <select name="option" className={styles.dropdown}>
            <option value="title">제목</option>
            <option value="titleOrDescription">제목 + 내용</option>
          </select>
          <input
            type="text"
            name="searchQuery"
            placeholder="Search"
            className={styles.searchInput}
          />
          <button type="submit" className={styles.button}>
            Search
          </button>
        </Form>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    )
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
  console.log("discoverLoader");
  console.log(config);

  try {
    switch (subjectPath) {
      case "publication":
        const publicationResponse = await discoverAxios.get(
          "/publication",
          config
        );
        return { subjectPath, ...publicationResponse.data };
      case "anime":

      case "publisher":
        const publisherResponse = await discoverAxios.get("/publisher", config);
        console.log(publisherResponse);
        return { subjectPath, ...publisherResponse.data };

      case "artist":
    }
  } catch (error) {
    throw error;
  }
}

export async function discoverAction({ params, request }) {
  console.log("discoverAction");
  let formData = await request.formData();

  const subjectPath = params.subject;

  const url = new URL(request.url);
  const type = url.searchParams.get("type");
  let requestPageNum = url.searchParams.get("page");

  const option = formData.get("option");
  const searchQuery = formData.get("searchQuery");

  requestPageNum = 1;

  // Modify the URL with new query parameters
  const newSearchParams = new URLSearchParams(url.searchParams);
  newSearchParams.set("option", option);
  if (searchQuery) newSearchParams.set("searchQuery", searchQuery);
  if (searchQuery === "") newSearchParams.delete("searchQuery");
  newSearchParams.set("page", requestPageNum);

  // Create the new URL
  const newUrl = `${url.pathname}?${newSearchParams.toString()}`;

  // Redirect to the new URL
  return redirect(newUrl);

  const config = {
    params: {
      page: requestPageNum,
      option: option,
      searchQuery: searchQuery,
      typeString: type,
    },
  };
  console.log("config");
  console.log(config);

  try {
    switch (subjectPath) {
      case "publication":
        const publicationResponse = await discoverAxios.get(
          "/publication",
          config
        );
        console.log(publicationResponse.data);
        return publicationResponse.data;
      case "anime":

      case "publisher":
        const publisherResponse = await discoverAxios.get("/publisher", config);
        console.log(publisherResponse);
        return publisherResponse.data;

      case "artist":
    }
  } catch (error) {
    throw error;
  }
}
