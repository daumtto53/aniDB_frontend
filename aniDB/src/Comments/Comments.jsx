import React from 'react';
import styles from './Comments.module.css';
import CommentItem from './CommentItem';
import CommentForm from './CommentForm';

const Comments = ({ comments, likeFrom }) => {
  return (
    <div className={styles.commentsContainer}>
      <h3 className={styles.commentsHeader}>Comments</h3>
      <hr className={styles.headerLine} />
      <div className={styles.commentsList}>
        {comments.map((comment, index) => (
          <CommentItem key={comment['seriesCommentId']} comment={comment} likeFrom={likeFrom} />
        ))}
      </div>
      <div>
        <CommentForm />
      </div>
    </div>
  );
};

export default Comments;
