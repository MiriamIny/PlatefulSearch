import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Meal from '../components/Meal';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (query) => {
    setLoading(true);
    setError('');
    setMeals([]);

    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await res.json();

      if (data.meals) {
        setMeals(data.meals);
      } else {
        setError('No results found.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.mealGrid}>
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Home;
