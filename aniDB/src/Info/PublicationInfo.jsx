import React from "react";

import Comments from "../Comments/Comments";

import styles from "./PublicationInfo.module.css";
import LikeButton from "../Like/LikeButton";

const commentData = [
  {
    author: "John Doe",
    date: "2024-02-15 10:32",
    text: "This is a comment about something.",
    profileImage: "profile1.jpg",
  },
  {
    author: "Jane Smith",
    date: "2023-11-28 17:45",
    text: "Another interesting comment.",
    profileImage: "profile2.png",
  },
  {
    author: "Alex Lee",
    date: "2024-03-05 09:12",
    text: "A thoughtful comment.",
    profileImage: "profile3.jpeg",
  },
  {
    author: "Emily Brown",
    date: "2023-12-20 15:37",
    text: "Quick comment.",
    profileImage: "profile4.jpg",
  },
  {
    author: "David Kim",
    date: "2024-01-08 12:25",
    text: "A longer comment with more details.",
    profileImage: "profile5.png",
  },
  {
    author: "Olivia Taylor",
    date: "2023-09-15 20:48",
    text: "This is a short comment.",
    profileImage: "profile6.jpeg",
  },
  {
    author: "Noah Anderson",
    date: "2024-02-22 16:11",
    text: "A question for the author.",
    profileImage: "profile7.jpg",
  },
  {
    author: "Sophia Miller",
    date: "2023-10-03 13:24",
    text: "A helpful comment.",
    profileImage: "profile8.png",
  },
  {
    author: "Ethan Davis",
    date: "2024-01-29 11:56",
    text: "A funny comment.",
    profileImage: "profile9.jpeg",
  },
  {
    author: "Mia Johnson",
    date: "2023-12-07 18:32",
    text: "A supportive comment.",
    profileImage: "profile10.jpg",
  },
];

const PublicationInfo = () => {
  const tableData = [
    { label: "나도 이름", value: "" },
    { label: "술종", value: "123" },
    { label: "지역", value: "" },
    { label: "술명사", value: "" },
    { label: "알콜", value: "" },
    { label: "주원료 시리즈", value: "" },
    { label: "술마을", value: "" },
    { label: "브랜드 이름", value: "" },
    { label: "브랜드 설명", value: "" },
    { label: "마디에 맞춰", value: "" },
    { label: "술테이스트 노트", value: "" },
  ];

  return (
    <div className={styles.info}>
      <h1>&lt;&lt; 제목 &gt;&gt;</h1>
      <div className={styles.content}>
        <div className={styles["left-section"]}>
          <div className={styles["image-placeholder"]}>URL IMAGE</div>
        </div>
        <div className={styles["right-section"]}>
          <table className={styles["info-table"]}>
            <tbody>
              {tableData.map((item, index) => (
                // className
                <tr
                  key={index}
                  className={index % 2 === 0 ? styles.even : styles.odd}
                >
                  <td>{item.label}</td>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles["middle-section"]}>
        <div className={styles["ranking"]}>
          <label>Ranking</label>
          <input type="text" value="12" readOnly />
        </div>
        <div className={styles["liked"]}>
          <label>Liked</label>
          <input type="text" value="100" readOnly />
        </div>
        <div className={styles["scrored"]}>
          <label>scrored</label>
          <input type="text" value="100" readOnly />
        </div>
      </div>
      <div className={styles["lorem-ipsum"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div className={styles.like}>
        <LikeButton />
      </div>
      <Comments comments={commentData} />
    </div>
  );
};

export default PublicationInfo;
