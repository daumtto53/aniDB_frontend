import React, { useState } from "react";
import styles from "./advancedSearch.module.css";

const AdvancedSearch = () => {
  const [typeOptions] = useState(["Option 1", "Option 2", "Option 3", "Option 4"]);
  const [genres] = useState([
    "Genre1", "Genre2", "Genre3", "Genre4", "Genre5", "Genre6", "Genre7", "Genre8",
    "Genre9", "Genre10", "Genre11", "Genre12", "Genre13", "Genre14", "Genre15", "Genre16",
    "Genre17", "Genre18", "Genre19", "Genre20", "Genre21", "Genre22", "Genre23", "Genre24",
    "Genre25", "Genre26", "Genre27", "Genre28", "Genre29", "Genre30"
  ]);

  return (
    <div className={styles.container}>
      <h1>Advanced Search</h1>
      <form>
        <div className={styles.formGroup}>
          <label>Title</label>
          <input type="text" placeholder="Title Example" />
        </div>

        <div className={styles.formGroup}>
          <label>Publisher</label>
          <input type="text" placeholder="Title Example" />
        </div>

        <div className={styles.formGroup}>
          <label>Type</label>
          <select>
            {typeOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label>Year</label>
          <input type="number" placeholder="2016" min="1900" max="2099" /> to
          <input type="number" placeholder="2020" min="1900" max="2099" />
        </div>

        <div className={styles.formGroup}>
          <label>Status</label>
          <div className={styles.checkboxGroup}>
            <label><input type="checkbox" /> Ongoing</label>
            <label><input type="checkbox" /> Completed</label>
            <label><input type="checkbox" /> Hiatus</label>
            <label><input type="checkbox" /> Discontinued</label>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Volumes</label>
          <input type="number" placeholder="1" min="1" /> to
          <input type="number" placeholder="10" min="1" />
        </div>

        <div className={styles.formGroup}>
          <label>Genres</label>
          <div className={styles.checkboxGroup}>
            {genres.map((genre, index) => (
              <label key={index}><input type="checkbox" /> {genre}</label>
            ))}
          </div>
        </div>

        <button type="submit" className={styles.searchButton}>Advanced Search</button>
      </form>
    </div>
  );
};

export default AdvancedSearch;