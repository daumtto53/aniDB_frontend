import React from 'react';
import styles from"./PublisherInfo.module.css" // Assuming you have a CSS file for styling
import { infoAxios } from '../API/API';
import { Link, useLoaderData } from 'react-router-dom';


const PublisherInfo = () => {
  const loaderInfo = useLoaderData();

  const {
    publisherName,
    alternativePublisherNameList,
    labelList,
    websiteUrl,
    createdAt,
    updatedAt,
    descendantPublicationList
  } = loaderInfo;

  console.log(loaderInfo);

  const formatDate = (dateArray) => {
    if (!dateArray || dateArray.length < 3) return 'N/A';
    return `${dateArray[0]}-${String(dateArray[1]).padStart(2, '0')}-${String(dateArray[2]).padStart(2, '0')}`;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{publisherName}</h1>
      
      <div className={styles.infoGrid}>
        <div className={styles.infoItem}>
          <h2 className={styles.infoTitle}>Alternate Names</h2>
          <ul className={styles.list}>
            {alternativePublisherNameList.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
        
        <div className={styles.infoItem}>
          <h2 className={styles.infoTitle}>Website</h2>
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
            {websiteUrl}
          </a>
        </div>
        
        <div className={styles.infoItem}>
          <h2 className={styles.infoTitle}>Created At</h2>
          <p>{formatDate(createdAt)}</p>
        </div>
        
        <div className={styles.infoItem}>
          <h2 className={styles.infoTitle}>Updated At</h2>
          <p>{formatDate(updatedAt)}</p>
        </div>
      </div>

      <div className={styles.publications}>
        <h2 className={styles.infoTitle}>하위 출판사 레이블</h2>
        <ul className={styles.publicationList}>
          {labelList.map((label, index) => (
            <li key={label.publisherId} className={styles.publicationItem}>
              <Link to={`/info/publisher/${label.publisherId}`}>{label.publisherName}</Link>
            </li>
          ))}
        </ul>
      </div>


      <div className={styles.publications}>
        <h2 className={styles.infoTitle}>Licensed Series</h2>
        <ul className={styles.publicationList}>
          {descendantPublicationList.map((pub, index) => (
            <li key={pub.publicationId} className={styles.publicationItem}>
              <Link to={`/info/publication/${pub.publicationId}`}>{pub.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export async function publisherInfoLoader({ params, request }) {
  const url = new URL(request.url);
  const id = params.publisherId;

  try {
    const infoResponse = await infoAxios.get(`/publisher/${id}`);
    return infoResponse.data;
  } catch (error) {
    throw error;
  }
}


export default PublisherInfo;