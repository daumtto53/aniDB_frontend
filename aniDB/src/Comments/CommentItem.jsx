import React from 'react';
import styles from './CommentItem.module.css';

import LikeButton from '../Like/LikeButton';
import { formatTimeStampToDateTime } from './../util/datetime';
import { Form } from 'react-router-dom';

const CommentItem = ({ comment}) => {
  console.log(comment);

  return (
    <div className={styles.commentItem}>
      <div className={styles.profileImageContainer}>
        <img src={comment.profileImage} alt="Profile" className={styles.profileImage} />
      </div>
      <div className={styles.commentContent}>
        <div className={styles.commentHeader}>
          <span className={styles.author}>{comment['memberDTO'].nickname === null ? 'null': comment['memberDTO'].nickname}</span>
          <span className={styles.date}>{formatTimeStampToDateTime(comment['updatedAt'])}</span>
        </div>
        <textarea
          className={styles.commentText}
          value={comment.anidbComment}
          readOnly
        />
        <div className={styles.commentFooter}>
          <div className={styles.buttonGroup}>
            {/* <button className={styles.button}>Modify</button> */}
            <Form method='post'>
              <input type='hidden' name='commentId' value={comment.seriesCommentId} />
              <button type='submit' name='intent' value='deleteComment' className={styles.button}>Delete</button>
            </Form>
          </div>
          <LikeButton initialLikes={comment.likes} />
        </div>
      </div>
    </div>
  );
};

export default CommentItem;