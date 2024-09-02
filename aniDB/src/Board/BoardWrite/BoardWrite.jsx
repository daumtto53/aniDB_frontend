import React, { useState } from 'react';
import styles from './BoardWrite.module.css';
import { Form, Link, redirect, useParams } from 'react-router-dom';
import { articleAxios } from '../../API/API';

const BoardWrite = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const {id} = useParams();
  console.log(id);
  return (
    <div className={styles.container}>
      <div className={styles.browserBar}>
        {/* <label>Subject</label>
        <input 
          type="text" 
          readOnly 
          disabled
          className={styles.urlBar}
        /> */}
      </div>
      <Form className={styles.form} method='post'>
        {/* <label htmlFor="author">Author</label>
        <input 
          type="text" 
          readOnly
          disabled
          className={styles.input}
        /> */}
        
        <label htmlFor="title">Title</label>
        <input 
          type="text" 
          id="title" 
          name="title" 
          onChange={e => setTitle(e.target.value)}
          className={styles.input}
        />

        <label htmlFor="content">Text Content</label>
        <textarea 
          id="content" 
          name="content" 
          onChange={e => setContent(e.target.value)}
          className={styles.textarea}
        />

        <div className={styles.buttonGroup}>

          <Link to={`/article/${id}`}>Go back</Link>

          <button type="button" className={styles.button}>
            attachment
          </button>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export async function articleWriterLoader({ params, request }) {
  const url = new URL(request.url);
  const id = params.id;
  console.log(id);

  try {
    const articleResponse = await articleAxios.get(`/${id}`);
    // console.log(articleResponse.data);
    return articleResponse.data;
  } catch (error) {
    throw error;
  }
}

export async function articleWriterAction({params, request}) {
  const url = new URL(request.url);
  const id = params.id;

  let formData = await request.formData();

  const dto = {
    publicationId: params.id,
    title: formData.get('title'),
    content: formData.get('content'),
  }

  try {
    const writeResponse = await articleAxios.post(`/${id}`, dto)
    console.log(writeResponse.data);
    return redirect(`/article/${id}`);
  } catch(error) {
    throw error;
  }
}

export default BoardWrite;