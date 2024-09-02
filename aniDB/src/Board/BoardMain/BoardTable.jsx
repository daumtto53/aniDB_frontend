import React from "react";
import styles from "./BoardTable.module.css";
import { formatTimeStampToDateTime } from "./../../util/datetime";
import { Link } from "react-router-dom";

const BoardTable = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>TITLE</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ArticleId</th>
            <th>Title</th>
            <th>Author</th>
            <th>CommentCount</th>
            <th>Views</th>
            <th>Recommended</th>
            <th>Created Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className={styles["column-articleId"]}>{row.articleId}</td>
              <td className={styles["column-title"]}>
                <Link to={`/article/${row.publicationId}/${row.articleId}`}>
                  {row.title}
                </Link>
              </td>
              <td className={styles["column-author"]}>
                {row.memberDTO.nickname}
              </td>
              <td className={styles['column-views']}>{row.commentCount}</td>
              <td className={styles["column-views"]}>{row.views}</td>
              <td className={styles["column-recommended"]}>{row.upvotes}</td>
              <td className={styles["column-createdTime"]}>
                {formatTimeStampToDateTime(row.createdAt)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BoardTable;
