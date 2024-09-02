import React from 'react';
import styles from './Comments.module.css';
import CommentItem from './CommentItem';

const Comments = ({ comments }) => {
  console.log("comments", comments)
  return (
    <div className={styles.commentsContainer}>
      <h3 className={styles.commentsHeader}>Comments</h3>
      <hr className={styles.headerLine} />
      <div className={styles.commentsList}>
        {comments.map((comment, index) => (
          <CommentItem key={comment['seriesCommentId']} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
