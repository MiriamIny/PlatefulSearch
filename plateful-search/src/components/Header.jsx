/* Path: src/components/Header.jsx
 * Project: Plateful Search
 * Developers: Temima Lewin, Miriam Iny, and Hailey Lazar
 * Purpose:
 *      This component returns a static header
 */

import { NavLink } from 'react-router-dom';
import styles from '../styles/styles.module.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Plateful Search Logo" className={styles.logo} />
      <h1>Plateful Search</h1>
      <nav>
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
