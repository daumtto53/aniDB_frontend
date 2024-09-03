import React from "react";
import styles from "./BoardRead.module.css";
import Comments from "../../Comments/Comments";
import { articleAxios } from "../../API/API";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { formatTimeStampToDateTime } from "./../../util/datetime";

/** TODO
 *
 *  1. modify
 *  2. write
 *  3. delete
 */
const BoardRead = () => {
  const articleData = useLoaderData();
  const { id, articleId } = useParams();
  console.log("articleData", articleData);
  const commentList =
    articleData.commentList[0].commentId === null
      ? []
      : articleData.commentList.map((comment) => {
          return {
            ...comment,
            likes: comment.upvotes,
            seriesCommentId: comment.commentId,
            nickname:
              comment.memberDTO.nickname === null
                ? "null"
                : comment.memberDTO.nickname,
            anidbComment: comment.content,
          };
        });

  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      // Send the DELETE request
      await articleAxios.delete(`/${id}/${articleId}`);
      // Optionally, navigate to another page after deletion
      navigate(`/article/${id}`); // Redirect to the list of articles
    } catch (error) {
      console.error("There was an error deleting the article!", error);
    }
  };

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
            value={
              articleData.memberDTO.nickname == null
                ? "null"
                : articleData.memberDTO.nickname
            }
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
            <Link to={`/article/${id}`}>Go Back</Link>
            <Link to={`/article/${id}/${articleId}/modify`}>Modify</Link>
            <Link onClick={handleDelete}>Delete</Link>
          </div>
        </form>
      </div>
      <Comments comments={commentList} likeFrom='articleComment'/>
    </div>
  );
};

export async function articleInfoLoader({ params, request }) {
  const url = new URL(request.url);
  const id = params.id;
  const articleId = params.articleId;

  try {
    const articleResponse = await articleAxios.get(`/${id}/${articleId}`);
    return articleResponse.data;
  } catch (error) {
    throw error;
  }
}

export async function articleInfoAction({params, request}) {
  const url = new URL(request.url);
  const id = params.id;
  const articleId = params.articleId;

  const formData = await request.formData();
  const intent = formData.get('intent');
  const commentId = formData.get('commentId');

  const requestBody = {
    content : formData.get('content'),
  }


  switch(intent) {
    case 'comment':
      try {
        const articleCommentPost = await articleAxios.post(`/${id}/${articleId}/comment`, requestBody);
        return articleCommentPost.data;
      } catch (error) {
        throw error;
      }
    case 'deleteComment':
      try {
        const articleCommentDelete = await articleAxios.delete(`/${id}/${articleId}/comment/${commentId}`);
        return articleCommentDelete.data;
      } catch (error) {
        throw error;
      }
    default: 
      return null;
    
  }

}

export default BoardRead;
