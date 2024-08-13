import React from 'react';
import styles from './BoardWrite.module.css';

const BoardWrite = () => {
  return (
    <div className={styles.container}>
      <div className={styles.browserBar}>
        <label>Subject</label>
        <input 
          type="text" 
          value="Subject"
          readOnly 
          disabled
          className={styles.urlBar}
        />
      </div>
      <form className={styles.form}>
        <label htmlFor="author">Author</label>
        <input 
          type="text" 
          id="author" 
          name="author" 
          defaultValue="john@jgraph.com" 
          className={styles.input}
        />
        
        <label htmlFor="title">Title</label>
        <input 
          type="text" 
          id="title" 
          name="title" 
          defaultValue="Greeting" 
          className={styles.input}
        />

        <label htmlFor="content">Text Content</label>
        <textarea 
          id="content" 
          name="content" 
          defaultValue="Lorem ipsum" 
          className={styles.textarea}
        />

        <div className={styles.buttonGroup}>
          <button type="button" className={styles.button}>
            Go Back
          </button>
          <button type="button" className={styles.button}>
            attachment
          </button>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BoardWrite;