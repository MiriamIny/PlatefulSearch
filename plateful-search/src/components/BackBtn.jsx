/* Path: src/components/BackBtn.jsx
 * Project: Plateful Search
 * Developers: Temima Lewin, Miriam Iny, and Hailey Lazar
 * Purpose:
 *      This component returns a back button using navigate to go back in history
 */

import { useNavigate } from 'react-router-dom';
import styles from '../styles/styles.module.css';


const BackBtn = () => {
    const navigate = useNavigate();

    return (<button className={back-btn} onClick={() => navigate(-1)}>Back</button>);
};

export default BackBtn;
