import React, { useState } from "react";
import styles from "./CommentForm.module.css";
import { Form } from "react-router-dom";

const CommentForm = () => {
  const [content, setContent] = useState();

  return (
    <Form method='post'>
      <div className={styles.commentItem}>
        <div className={styles.commentContent}>
          <div className={styles.commentHeader}>
            <textarea
              className={styles.commentText}
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <div className={styles.commentFooter}>
            <div className={styles.buttonGroup}>
              <button type="submit" name="intent" value='comment' className={styles.button}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default CommentForm;
