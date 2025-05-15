/* Path: src/components/SearchBar.jsx
 * Project: Plateful Search
 * Developers: Temima Lewin, Miriam Iny, and Hailey Lazar
 * Purpose:
 *      This component renders a search bar for users to input a meal query.
 *      It calls the onSearch function (passed via props) when the form is submitted.
 */

import React, { useState } from 'react';
import styles from '../styles/SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  // Local state to track user input
  const [query, setQuery] = useState('');

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default page reload
    // Only trigger search if input isn't empty or just spaces
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    // Search form container
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      {/* ASK MISS LACHMAN IF WE NEED TO USE EMPTY LABEL FOR ACCESSIBLITY */}
      {/* Input field bound to query state */}
      <input
        type="text"
        placeholder="Search for a meal..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.input}
      />
      {/* Submit button triggers handleSubmit */}
      <button type="submit" className={styles.button}>Search</button>
    </form>
  );
};

export default SearchBar;