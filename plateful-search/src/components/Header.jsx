/* Path: src/components/Header.jsx
 * Project: Plateful Search
 * Developers: Temima Lewin, Miriam Iny, and Hailey Lazar
 * Purpose:
 *      This component returns a static header
 */

import { NavLink } from 'react-router-dom';
import styles from '../styles/styles.module.css';
import logo from '../assets/logo.png';
import BackBtn from './BackBtn';

const Header = () => {
  return (
   <header className={styles.header}>
      <div className={styles.left}>
        <img src={logo} alt="Plateful Search Logo" className={styles.logo} />
        <h1 className={styles.title}>Plateful Search</h1>
      </div>

      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>
          About
        </NavLink>
      </nav>

      <div className={styles.right}>
        <BackBtn />
      </div>
    </header>
  );
};

export default Header;
