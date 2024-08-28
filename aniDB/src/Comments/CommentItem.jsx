import React from 'react';
import styles from './CommentItem.module.css';

import LikeButton from '../Like/LikeButton';
import { formatTimeStampToDateTime } from './../util/datetime';

const CommentItem = ({ comment }) => {
  console.log(comment);
  return (
    <div className={styles.commentItem}>
      <div className={styles.profileImageContainer}>
        <img src={comment.profileImage} alt="Profile" className={styles.profileImage} />
      </div>
      <div className={styles.commentContent}>
        <div className={styles.commentHeader}>
          <span className={styles.author}>{comment['memberDTO'].name === null ? 1: 2}</span>
          <span className={styles.date}>{formatTimeStampToDateTime(comment['updatedAt'])}</span>
        </div>
        <textarea
          className={styles.commentText}
          value={comment.anidbComment}
          readOnly
        />
        <div className={styles.commentFooter}>
          <div className={styles.buttonGroup}>
            <button className={styles.button}>Modify</button>
            <button className={styles.button}>Delete</button>
            <button className={styles.button}>Submit</button>
          </div>
          <LikeButton initialLikes={comment.likes} />
        </div>
      </div>
    </div>
  );
};

export default CommentItem;