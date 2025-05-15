// src/components/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Plateful Search</h1>
      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
