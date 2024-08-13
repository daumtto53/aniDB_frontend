import React, { useState } from 'react';
import styles from './LikeButton.module.css';

const LikeButton = ({ initialLikes = 0 }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  return (
    <div className={styles.likeContainer}>
      <button 
        className={`${styles.likeButton} ${liked ? styles.liked : ''}`}
        onClick={handleLike}
      >
        {liked ? '❤️' : '🤍'} Like
      </button>
      <span className={styles.likeCount}>{likes}</span>
    </div>
  );
};

export default LikeButton;