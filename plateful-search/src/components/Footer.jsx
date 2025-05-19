/* Path: src/components/Footer.jsx
 * Project: Plateful Search
 * Developers: Temima Lewin, Miriam Iny, and Hailey Lazar
 * Purpose:
 *      This component returns a static footer
 */

import '../App.css';

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Plateful Search. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
