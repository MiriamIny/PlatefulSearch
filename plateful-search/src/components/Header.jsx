/* Path: src/components/Header.jsx
 * Project: Plateful Search
 * Developers: Temima Lewin, Miriam Iny, and Hailey Lazar
 * Purpose:
 *      This component returns a static header
 */

import { NavLink } from 'react-router-dom';
import BackBtn from '../components/BackBtn';
import logo from '../assets/logo.png';
import '../App.css';

const Header = () => {
  // Function to scroll window to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="headerContainer">
      <BackBtn />
      <header>
        <img src={logo} alt="Plateful Search" />
      </header>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ''} onClick={scrollToTop}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ''} onClick={scrollToTop}>
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
