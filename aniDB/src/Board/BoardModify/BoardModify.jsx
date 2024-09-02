import React, { useState } from 'react';
import styles from './BoardModify.module.css';
import { Form, Link, redirect, useLoaderData, useParams } from 'react-router-dom';
import { articleAxios } from '../../API/API';

const BoardModify = () => {

  const loaderData = useLoaderData();

  const [title, setTitle] = useState(loaderData.title);
  const [content, setContent] = useState(loaderData.content);

  const {id} = useParams();

  console.log(id);
  return (
    <div className={styles.container}>
      <div className={styles.browserBar}>
        <label>Subject</label>
        <input 
          type="text" 
          value={loaderData.publicationTitle}
          readOnly 
          disabled
          className={styles.urlBar}
        />
      </div>
      <Form className={styles.form} method='post'>
        <label htmlFor="author">Author</label>
        <input 
          type="text" 
          value={loaderData.memberDTO.nickname === null ? 'null' : loaderData.memberDTO.nickname}
          readOnly
          disabled
          className={styles.input}
        />
        
        <label htmlFor="title">Title</label>
        <input 
          type="text" 
          id="title" 
          name="title" 
          value={title}
          onChange={e => setTitle(e.target.value)}
          className={styles.input}
        />

        <label htmlFor="content">Text Content</label>
        <textarea 
          id="content" 
          name="content" 
          value={content}
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

export async function articleModifyLoader({ params, request }) {
  const url = new URL(request.url);
  const id = params.id;
  const articleId = params.articleId;

  try {
    const articleResponse = await articleAxios.get(`/${id}/${articleId}`);
    console.log(articleResponse.data);
    return articleResponse.data;
  } catch (error) {
    throw error;
  }
}

export async function articleModifyAction({params, request}) {
  const url = new URL(request.url);
  const id = params.id;
  const articleId = params.articleId;
  
  console.log('articleModifyAction');

  let formData = await request.formData();

  const dto = {
    publicationId: params.id,
    title: formData.get('title'),
    content: formData.get('content'),
  }

  try {
    const writeResponse = await articleAxios.put(`/${id}/${articleId}`, dto)
    console.log(writeResponse.data);
    return redirect(`/article/${id}/${articleId}`);
  } catch(error) {
    throw error;
  }
}

export default BoardModify;