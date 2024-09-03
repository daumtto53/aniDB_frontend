import React, { useEffect, useState } from "react";
import styles from "./PublicationLikeButton.module.css";
import { upvoteAxios } from "../API/API";

const PublicationLikeButton = ({ initialLikes , likeFrom, id}) => {

  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (likeFrom === "publicationInfo") {
          const res = await upvoteAxios.get(`/publication/${id}`);
          return res.data;
        }
      } catch (error) {
        console.log(error);
      }
    }

    const updateLikeStatus = async () => {
      const like = await fetchData();
      console.log(like); // Now this will log the resolved data, not the Promise
      setLiked(like);
    };

    updateLikeStatus();
  }, []);

  const handleLike = async () => {
    if (liked) {
      try {
        const res = await upvoteAxios.delete(`/publication/${id}`);
      } catch (error) {console.log(error)}
      setLikes(likes - 1);
      setLiked(false);
    } else {
        const res = await upvoteAxios.post(`/publication/${id}`);
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  return (
    <div className={styles.likeContainer}>
      <button
        className={`${styles.likeButton} ${liked ? styles.liked : ""}`}
        onClick={handleLike}
      >
        {liked ? "❤️" : "🤍"} Like
      </button>
      <span className={styles.likeCount}>{likes}</span>
    </div>
  );
};

export default PublicationLikeButton;
