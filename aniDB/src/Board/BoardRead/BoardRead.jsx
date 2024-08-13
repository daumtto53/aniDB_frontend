import React from "react";
import styles from "./BoardRead.module.css";
import Comments from "../../Comments/Comments";

const commentData = [
  {
    author: "John Doe",
    date: "2024-02-15 10:32",
    text: "This is a comment about something.",
    profileImage: "profile1.jpg",
  },
  {
    author: "Jane Smith",
    date: "2023-11-28 17:45",
    text: "Another interesting comment.",
    profileImage: "profile2.png",
  },
  {
    author: "Alex Lee",
    date: "2024-03-05 09:12",
    text: "A thoughtful comment.",
    profileImage: "profile3.jpeg",
  },
  {
    author: "Emily Brown",
    date: "2023-12-20 15:37",
    text: "Quick comment.",
    profileImage: "profile4.jpg",
  },
  {
    author: "David Kim",
    date: "2024-01-08 12:25",
    text: "A longer comment with more details.",
    profileImage: "profile5.png",
  },
  {
    author: "Olivia Taylor",
    date: "2023-09-15 20:48",
    text: "This is a short comment.",
    profileImage: "profile6.jpeg",
  },
  {
    author: "Noah Anderson",
    date: "2024-02-22 16:11",
    text: "A question for the author.",
    profileImage: "profile7.jpg",
  },
  {
    author: "Sophia Miller",
    date: "2023-10-03 13:24",
    text: "A helpful comment.",
    profileImage: "profile8.png",
  },
  {
    author: "Ethan Davis",
    date: "2024-01-29 11:56",
    text: "A funny comment.",
    profileImage: "profile9.jpeg",
  },
  {
    author: "Mia Johnson",
    date: "2023-12-07 18:32",
    text: "A supportive comment.",
    profileImage: "profile10.jpg",
  },
];

const BoardRead = () => {
  return (
    <div>
      <div className={styles.container}>
        <form className={styles.form}>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            defaultValue="john@jgraph.com"
            className={styles.input}
            disabled
          />

          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue="Greeting"
            className={styles.input}
            disabled
          />

          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            defaultValue="john@jgraph.com"
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
                defaultValue="12"
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
                defaultValue="Greeting"
                className={styles.input}
                disabled
              />
            </div>
          </div>

          <label htmlFor="content">Text Content</label>
          <textarea
            id="content"
            name="content"
            defaultValue="Lorem ipsum"
            className={styles.textarea}
            disabled
          />

          <div className={styles.buttonGroup}>
            <button type="button" className={styles.button}>
              Go Back
            </button>
            <button type="button" className={styles.button}>
              Modify
            </button>
            <button type="button" className={styles.button}>
              Delete
            </button>
          </div>
        </form>
      </div>
      <Comments comments={commentData}/>
    </div>
  );
};

export default BoardRead;
