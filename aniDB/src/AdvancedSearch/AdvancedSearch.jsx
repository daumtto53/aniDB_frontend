import React, { useState } from "react";
import {
  Form,
  Link,
  redirect,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import styles from "./advancedSearch.module.css";
import { advancedSearchAxios } from "../API/API";

const AdvancedSearch = () => {
  const { genreList, seriesTypeList } = useLoaderData();

  const [title, setTitle] = useState("");
  const [publisher, setPublisher] = useState("");
  const [type, setType] = useState("");
  const [yearStart, setYearStart] = useState(1900);
  const [yearEnd, setYearEnd] = useState(2099);
  const [volumesStart, setVolumesStart] = useState(1);
  const [volumesEnd, setVolumesEnd] = useState(10);
  const [status, setStatus] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleStatusChange = (event) => {
    const value = event.target.value;
    setStatus((prevStatus) =>
      prevStatus.includes(value)
        ? prevStatus.filter((status) => status !== value)
        : [...prevStatus, value]
    );
  };

  const handleGenreChange = (event) => {
    const value = event.target.value;
    setSelectedGenres((prevGenres) =>
      prevGenres.includes(value)
        ? prevGenres.filter((genre) => genre !== value)
        : [...prevGenres, value]
    );
  };

  return (
    <div className={styles.container}>
      <h1>Advanced Search</h1>
      <Form method="post">
        <div className={styles.formGroup}>
          <label>Title</label>
          <input
            type="text"
            placeholder="Title Example"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Publisher</label>
          <input
            type="text"
            placeholder="Publisher Example"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
            name="publisher"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            name="type"
          >
            {seriesTypeList.map((option, index) => (
              <option key={index} value={option.typeName}>
                {option.typeName}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label>Year</label>
          <input
            type="number"
            placeholder="2016"
            min="1900"
            max="2099"
            value={yearStart}
            onChange={(e) => setYearStart(e.target.value)}
            name="yearStart"
          />{" "}
          to
          <input
            type="number"
            placeholder="2020"
            min="1900"
            max="2099"
            value={yearEnd}
            onChange={(e) => setYearEnd(e.target.value)}
            name="yearEnd"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Status</label>
          <div className={styles.checkboxGroup}>
            {["Ongoing", "Completed", "Hiatus", "Discontinued"].map(
              (statusOption) => (
                <label key={statusOption}>
                  <input
                    type="checkbox"
                    value={statusOption}
                    checked={status.includes(statusOption)}
                    onChange={handleStatusChange}
                    name="status"
                  />{" "}
                  {statusOption}
                </label>
              )
            )}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Volumes</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            value={volumesStart}
            onChange={(e) => setVolumesStart(e.target.value)}
            name="volumesStart"
          />{" "}
          to
          <input
            type="number"
            placeholder="10"
            min="1"
            value={volumesEnd}
            onChange={(e) => setVolumesEnd(e.target.value)}
            name="volumesEnd"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Genres</label>
          <div className={styles.checkboxGroup}>
            {genreList.map((genre, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  value={genre.genreName}
                  checked={selectedGenres.includes(genre.genreName)}
                  onChange={handleGenreChange}
                  name="genres"
                />{" "}
                {genre.genreName}
              </label>
            ))}
          </div>
        </div>

        <button type="submit" className={styles.searchButton}>
          Advanced Search
        </button>
      </Form>
    </div>
  );
};

export async function advancedSearchLoader({ params, request }) {
  try {
    const response = await advancedSearchAxios.get("");
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function advancedSearchAction({ params, request }) {
  const formData = await request.formData();
  //formData에서 data collect해서 DTO를 만들고, Spring에 전달이 되는지 확인하고,
  //discover/publication으로 redirect시키기.
  //advancedSearchDTO와 같은 data도 URL의 query parameter에 포함시키기.

  let genres = [];
  let status = [];

  // Iterate over each entry in formData
  formData.forEach((value, key) => {
    if (key === "genres") {
      genres.push(value);
    } else if (key === "status") {
      status.push(value);
    }
  });

  // Now, genres and status arrays hold the respective values
  console.log("Genres:", genres);
  console.log("Status:", status);

  const advancedSearchDTO = {
    title: formData.get("title"),
    publisher: formData.get("publisher"),
    typeString: formData.get("type"),
    startYear: formData.get("yearStart"),
    endYear: formData.get("yearEnd"),
    startVolume: formData.get("volumesStart"),
    endVolume: formData.get("volumesEnd"),
    genreList: genres,
    status: status,
  };

  console.log(advancedSearchDTO);

  // status: ["Published", "Available"],
  // genreList: ["Fiction", "Fantasy"],

  try {
    const response = await advancedSearchAxios.post("", advancedSearchDTO);

    // If the response is successful, construct the query parameters for redirection
    // Manually construct query string
    const queryString = Object.entries(advancedSearchDTO)
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          return value.map((item) => `${encodeURIComponent(key)}=${encodeURIComponent(item)}`).join("&");
        }
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      })
      .join("&");
    // Redirect to the desired URL
    // const redirectUrl = `${import.meta.env.VITE_FRONTURL}/discover/publication?${queryString}`;
    const redirectUrl = `${import.meta.env.VITE_BASEURL}/discover/publication?${queryString}`;
    console.log(redirectUrl);
    console.log('');
    return redirect(redirectUrl);
    // window.location.href = redirectUrl;



    // return response.data;
  } catch (error) {
    throw error;
  }
}

export default AdvancedSearch;
