// src/components/Meal.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Meal.module.css';

const Meal = ({ meal }) => {
  const { idMeal, strMeal, strInstructions, strMealThumb } = meal;

  return (
    <div className={styles.card}>
      <img src={strMealThumb} alt={strMeal} className={styles.image} />
      <div className={styles.content}>
        <h3>{strMeal}</h3>
        <p>{strInstructions.substring(0, 100)}...</p>
        <Link to={`/item/${idMeal}`} className={styles.link}>View Details</Link>
      </div>
    </div>
  );
};

export default Meal;

