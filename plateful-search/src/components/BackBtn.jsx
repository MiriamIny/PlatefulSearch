/* Path: src/components/BackBtn.jsx
 * Project: Plateful Search
 * Developers: Temima Lewin, Miriam Iny, and Hailey Lazar
 * Purpose:
 *      This component returns a back button using navigate to go back in history
 */

import { useNavigate } from 'react-router-dom';
import '../App.css';


const BackBtn = () => {
    const navigate = useNavigate();
    // Function to scroll window to top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className="back-btn"
            onClick={() => {
                navigate(-1);
                scrollToTop();
            }}
        >
            Back
        </button>
    );
};

export default BackBtn;
