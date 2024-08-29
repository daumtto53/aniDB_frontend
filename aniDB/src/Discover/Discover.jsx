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
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const loaderData = useLoaderData();
  const { subjectPath, dtoList: pageItems, pageInfoDTO: pageInfo } = loaderData;

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(100);

  useEffect(() => {
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
  };

  const renderPublicationItem = (item) => (
    <div key={item.publicationId}>
      <p className={styles.ranking}>ranking : {item.ranked}</p>
      <img
        className={styles.image}
        src={item.coverImageUrl}
        alt={`Cover for ${item.title}`}
      />
      <Link to={`/info/publication/${item.publicationId}`}>{item.title}</Link>
    </div>
  );

  const renderAuthorItem = (item) => (
    <div key={item.publisherId}>
      <img
        className={styles.image}
        src={item.profileImageUrl}
        alt={`Profile of ${item.name}`}
      />
      <Link to={`/info/author/${item.authorId}`}>{item.name}</Link>
    </div>
  );

  const renderPublisherItem = (item) => (
    <div key={item.publisherId}>
      <p>출판물 개수: {item.descendantPublicationCount}</p>
      <img
        className={styles.image}
        src="https://www.ebscoind.com/wp-content/uploads/2018/08/publishers_warehouse_logo-1-2.jpg"
        alt={`Cover for ${item.title}`}
      />
      <Link to={`/info/publisher/${item.publisherId}`}>
        {item.publisherName}
      </Link>
    </div>
  );

  const renderItems = () => {
    switch (subjectPath) {
      case "publication":
        return pageItems.map(renderPublicationItem);
      case "author":
        return pageItems.map(renderAuthorItem);
      case "publisher":
        return pageItems.map(renderPublisherItem);
      default:
        return <p>Unknown subject path: {subjectPath}</p>;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>{renderItems()}</div>

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
