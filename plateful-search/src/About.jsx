// src/pages/About.jsx
import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h2>About Plateful Search</h2>
      <p>
        Welcome to Plateful Search! Our mission is to help you discover delicious recipes
        from TheMealDB API with ease and speed. Whether you’re searching for quick meals or
        gourmet dishes, our app makes exploring culinary ideas simple and fun.
      </p>
      <p>
        This project was built as part of a group assignment to practice React, React Router,
        API fetching, and responsive design with CSS Modules.
      </p>
      <p>
        We're Hailey Lazar, Miriam Iny, and Temima Lewin, and we hope you enjoy using it and find inspiration for your next meal!
      </p>
    </div>
  );
};

export default About;
