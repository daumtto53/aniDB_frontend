import React from 'react';
import styles from './SearchForm.module.css';

const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <select className={styles.dropdown}>
        <option>Option 1</option>
        {/* Add more options as needed */}
      </select>
      <input
        type="text"
        placeholder="Search"
        className={styles.searchInput}
      />
      <button type="submit" className={styles.submitButton}>
        Button Text
      </button>
    </form>
  );
};

export default SearchForm;