/* Path: src/components/Loading.jsx
 * Project: Plateful Search
 * Developers: Temima Lewin, Miriam Iny, and Hailey Lazar
 * Purpose: This component returns an error styled element to display error message
 */

import styles from '../styles/styles.module.css';

const Error = ({errorMsg}) => 
{
    return (
        <div className={styles.error}>
            <p>{errorMsg}</p>
        </div>
    );
};

export default Error;