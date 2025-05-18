import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Plateful Search Logo" className={styles.logo} />
      <h1>Plateful Search</h1>
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
