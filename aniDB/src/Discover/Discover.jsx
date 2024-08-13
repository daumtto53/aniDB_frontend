import React, { useState } from "react";

import styles from "./Discover.module.css";
import Pagination from "../BasicComponents/Pagination";
const items = [
  { id: 1, ranking: "#1", imageUrl: "image1.jpg", link: "https://link1.com" },
  { id: 2, ranking: "#2", imageUrl: "image2.jpg", link: "https://link2.com" },
  { id: 3, ranking: "#3", imageUrl: "image3.jpg", link: "https://link3.com" },
  { id: 4, ranking: "#4", imageUrl: "image4.jpg", link: "https://link4.com" },
  { id: 5, ranking: "#5", imageUrl: "image5.jpg", link: "https://link5.com" },
  { id: 6, ranking: "#6", imageUrl: "image6.jpg", link: "https://link6.com" },
  { id: 7, ranking: "#7", imageUrl: "image7.jpg", link: "https://link7.com" },
  { id: 8, ranking: "#8", imageUrl: "image8.jpg", link: "https://link8.com" },
  { id: 9, ranking: "#9", imageUrl: "image9.jpg", link: "https://link9.com" },
  { id: 9, ranking: "#9", imageUrl: "image9.jpg", link: "https://link9.com" },
  { id: 9, ranking: "#9", imageUrl: "image9.jpg", link: "https://link9.com" },
  { id: 9, ranking: "#9", imageUrl: "image9.jpg", link: "https://link9.com" },
  { id: 9, ranking: "#9", imageUrl: "image9.jpg", link: "https://link9.com" },
  { id: 9, ranking: "#9", imageUrl: "image9.jpg", link: "https://link9.com" },
  { id: 9, ranking: "#9", imageUrl: "image9.jpg", link: "https://link9.com" },
  { id: 9, ranking: "#9", imageUrl: "image9.jpg", link: "https://link9.com" },
  { id: 9, ranking: "#9", imageUrl: "image9.jpg", link: "https://link9.com" },
  { id: 9, ranking: "#9", imageUrl: "image9.jpg", link: "https://link9.com" },
];

export default function Discover() {

    /* For Pagination */
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(100);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        // Load Page for new page.
    }

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {items.map((item) => (
          <div key={item.id}>
            <p className={styles.ranking}>{item.ranking}</p>
            <img
              className={styles.image}
              // src={item.imageUrl}
              src = "https://cdn.myanimelist.net/images/manga/1/157897.jpg"
              alt={`Image ${item.id}`}
            />
            <a href={item.link}>HyperLink</a>
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

      {/* <div>
        <a href="#prev">Prev</a>
        {Array.from({ length: 10 }, (_, i) => (
          <a
            key={i + 1}
            href={`#page${i + 1}`}
            style={{ marginLeft: "10px", marginRight: "10px" }}
          >
            {i + 1}
          </a>
        ))}
        <a href="#next">Next</a>
      </div> */}
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        />
    </div>
  );
}
