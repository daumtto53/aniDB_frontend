import React from "react";
import styles from "./BoardRead.module.css";
import Comments from "../../Comments/Comments";
import { articleAxios } from "../../API/API";
import { Link, useLoaderData } from "react-router-dom";
import { formatTimeStampToDateTime } from './../../util/datetime';

/** TODO
 *  
 *  1. modify
 *  2. write
 *  3. delete
 */
const BoardRead = () => {

  const articleData = useLoaderData();
  console.log("articleData", articleData);
  const commentList = articleData.commentList.map(comment => {
    return {
      ...comment,
      likes: comment.upvotes,
      nickname: comment.memberDTO.nickname,
      anidbComment: comment.content,
    }
  });

  return (
    <div>
      <div className={styles.container}>
        <form className={styles.form}>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={articleData.publicationTitle}
            className={styles.input}
            disabled
          />

          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={articleData.title}
            className={styles.input}
            disabled
          />

          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={articleData.memberDTO.nickname == null ? 'null' : articleData.memberDTO.nickname}
            className={styles.input}
            disabled
          />

          <div className={styles.row}>
            <div className={styles.column}>
              <label htmlFor="views">Views</label>
              <input
                type="text"
                id="views"
                name="views"
                value={articleData.views}
                className={styles.input}
                disabled
              />
            </div>
            <div className={styles.column}>
              <label htmlFor="updatedTime">Updated time</label>
              <input
                type="text"
                id="updatedTime"
                name="updatedTime"
                value={formatTimeStampToDateTime(articleData.updatedAt)}
                className={styles.input}
                disabled
              />
            </div>
          </div>

          <label htmlFor="content">Text Content</label>
          <textarea
            id="content"
            name="content"
            value={articleData.content}
            className={styles.textarea}
            disabled
          />

          <div className={styles.buttonGroup}>
            <Link to={`/article/${articleData.publicationId}`}>Go Back</Link>
            <Link to="">Modify</Link>
            <Link to="">Delete</Link>
          </div>
        </form>
      </div>
      <Comments comments={commentList}/>
    </div>
  );
};


export async function articleInfoLoader({ params, request }) {
  const url = new URL(request.url);
  const id = params.id;
  const articleId = params.articleId;
  console.log(id, articleId);

  try {
    const articleResponse = await articleAxios.get(`/${id}/${articleId}`);
    console.log(articleResponse.data);
    return articleResponse.data;
  } catch (error) {
    throw error;
  }
}

export default BoardRead;
