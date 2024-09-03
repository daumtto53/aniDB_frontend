import React from "react";

import Comments from "../Comments/Comments";

import styles from "./PublicationInfo.module.css";
import LikeButton from "../Like/LikeButton";
import { Link, useLoaderData } from "react-router-dom";
import { infoAxios } from "../API/API";
import {
  formatTimeStampToDate,
  formatTimeStampToDateTime,
} from "./../util/datetime";

import AlternativeTitleTable from "./AlternativeTitleTable";
import RelatedSeriesTable from "./RelatedSeriesTable";
import AnimeAdaptationTable from "./AnimeAdaptationTable";



function formatGenreListToString(genreList) {

}

const PublicationInfo = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);

  const tableData = [
    { label: "Series Type", value: loaderData.seriesType },
    // { label: "Anime Adaptation", value: loaderData.animeAdaptationList },
    { label: "Genre List", value: loaderData.genreList.join(', ') },
    {
      label: "Published Date",
      value: formatTimeStampToDate(loaderData.publishedDate),
    },
    // { label: "Publisher List", value: loaderData.publisherList },
    { label: "Ranked", value: loaderData.ranked },
    { label: "Scores", value: loaderData.scores },
    {
      label: "Status in Origin Country",
      value: loaderData.statusInOriginCountry,
    },
    {
      label: "Volumes in Origin Country",
      value: loaderData.volumesInOriginCountry,
    },
    {
      label: "Created At",
      value: formatTimeStampToDateTime(loaderData.createdAt),
    },
    {
      label: "Updated At",
      value: formatTimeStampToDateTime(loaderData.updatedAt),
    },
  ];

  return (
    <div className={styles.info}>
      <h1>&lt;&lt; {loaderData.title} &gt;&gt;</h1>
      <div className={styles.content}>
        <div className={styles["left-section"]}>
          <div className={styles["image-placeholder"]}>
            <img className={styles.image} src={loaderData.coverImageUrl} />
          </div>
        </div>
        <div className={styles["right-section"]}>
          <table className={styles["info-table"]}>
            <tbody>
              {tableData.map((item, index) => {
                const rowClass = index % 2 === 0 ? styles.even : styles.odd;

                return (
                  <tr key={index} className={rowClass}>
                    <td className={styles["firstrow"]}>{item.label}</td>
                    <td>{item.value}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      
      <div>
        <h3>Alternative Title</h3>
        <AlternativeTitleTable alternativeTitles={loaderData.alternativeTitleList}/>
      </div>
      <div>
        <h3>Related Series</h3>
        <RelatedSeriesTable relatedSeries={loaderData.relatedSeriesList}/>
      </div>
      <div>
        <h3>Anime Adaptation</h3>
        <AnimeAdaptationTable animeAdaptationList ={loaderData.animeAdaptationList}/>
      </div>

      <div className={styles["middle-section"]}>
        <div className={styles["ranking"]}>
          <label>Ranking</label>
          <input type="text" value={loaderData.ranked} readOnly />
        </div>
        <div className={styles["liked"]}>
          <label>Liked</label>
          <input type="text" value={loaderData.upvotes} readOnly />
        </div>
        <div className={styles["scrored"]}>
          <label>scrored</label>
          <input type="text" value={loaderData.scores} readOnly />
        </div>
      </div>
      <div className={styles["lorem-ipsum"]}>{loaderData.description}</div>
      <div className={styles.like}>
        <LikeButton likes={loaderData.upvotes}/>
      </div>
      <div className={styles["link-to-board"]}>
        <Link to={`/article/${loaderData.publicationId}`}>Board</Link>
      </div>
      <Comments comments={loaderData.seriesCommentList} />
    </div>
  );
};

export async function publicationInfoLoader({ params, request }) {
  const url = new URL(request.url);
  const id = params.publicationId;

  try {
    const infoResponse = await infoAxios.get(`/publication/${id}`);
    return infoResponse.data;
  } catch (error) {
    throw error;
  }
}

export async function publicationInfoAction ({ params, request }) {
  const url = new URL(request.url);
  const id = params.publicationId;
  const formData = await request.formData();
  const intent = formData.get('intent');

  const requestBody = {
    anidbComment: formData.get('content'),
  }


  switch(intent) {
    case 'comment':
      try {
        const infoCommentPost = await infoAxios.post(`/publication/${id}/comment`, requestBody);
        return infoCommentPost.data;
      } catch (error) {
        throw error;
      }
    default: 
      return null;
    
  }
}



export default PublicationInfo;
