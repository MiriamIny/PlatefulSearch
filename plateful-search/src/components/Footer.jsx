// src/components/Footer.jsx
import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Plateful Search. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
