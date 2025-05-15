// Importing necessary dependencies and components
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Meal from '../components/Meal';
import styles from '../styles/SearchPage.module.css';

// Main functional component for the search page
const SearchPage = () => {
  // State to store fetched meals
  const [meals, setMeals] = useState([]);

  // State to manage seeing the loading...
  const [loading, setLoading] = useState(false);

  // State to handle any error messages
  const [error, setError] = useState('');

  // Function to handle search from the SearchBar component
  const handleSearch = async (query) => {
    setLoading(true);    // Show loading message
    setError('');        // Clear previous errors
    setMeals([]);        // Clear previous results

    try {
      // Fetch data from TheMealDB API with the user's query
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await res.json();

      // If meals are found, update the state
      if (data.meals) {
        setMeals(data.meals);
      } else {
        // If no meals found, set error message
        setError('No results found.');
      }
    } catch (err) {
      // Catch any errors (e.g., network issue) and set a general error
    }}}
