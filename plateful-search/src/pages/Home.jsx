import React, { useState } from 'react'; 
import SearchBar from '../components/SearchBar';
import MealList from '../components/MealList';
import Loading from '../components/Loading';
import styles from '../styles/Home.module.css';

const Home = () => {
  // State to hold fetched meals
  const [meals, setMeals] = useState([]);
  // State to indicate loading status
  const [loading, setLoading] = useState(false);
  // State to hold any error messages
  const [error, setError] = useState('');

  // Handles the search logic and API call
  const handleSearch = async (query) => {
    // Prepare UI for new search
    setLoading(true);
    setError('');
    setMeals([]);

    try {
      // Fetch meals from TheMealDB API based on query
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await res.json();

      // If meals found, update state, otherwise show "No results"
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setError('No results found.');
      }
    } catch {
      // Display general error if fetch fails
      setError('Something went wrong. Please try again.');
    }

    // Stop loading spinner/text
    setLoading(false);
  };

  return (
    <div className={styles.container}>
    
      {/* Search input component */}
      <SearchBar onSearch={handleSearch} />

      {/* Conditional rendering for loading and error messages */}
      {loading && <Loading/>}
      {error && <p className={styles.error}>{error}</p>}

      {/* Meal List Results component */}
      <MealList mealResults={meals} />
        
      </div>
  );
};

export default Home;
