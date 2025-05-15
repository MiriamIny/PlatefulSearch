import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Meal.module.css';

// Functional component `Meal`, receives a `meal` prop (an object with meal details)
const Meal = ({ meal }) => {
  // Destructure required properties from the meal object
  const { idMeal, strMeal, strInstructions, strMealThumb } = meal;

  return (
    // Container div styled as a card
    <div className={styles.card}>
      {/* Meal thumbnail(small picture) image with alt text for accessibility */}
      <img src={strMealThumb} alt={strMeal} className={styles.image} />

      {/* Content section with title, preview text, and link */}
      <div className={styles.content}>
        {/* Meal name as a heading */}
        <h3>{strMeal}</h3>

        {/* First 100 characters of the instructions followed by ellipsis */}
        <p>{strInstructions.substring(0, 100)}...</p>

        {/* Link to the meal detail page, using the meal ID in the URL */}
        <Link to={`/item/${idMeal}`} className={styles.link}>View Details</Link>
      </div>
    </div>
  );
};

export default Meal;

