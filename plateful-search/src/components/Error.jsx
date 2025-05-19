/* Path: src/components/Error.jsx
 * Project: Plateful Search
 * Developers: Temima Lewin, Miriam Iny, and Hailey Lazar
 * Purpose: This component returns an error styled element to display error message
 */

import '../App.css';

const Error = ({errorMsg}) => 
{
    return (
        <div className="error">
            <p>{errorMsg}</p>
        </div>
    );
};

export default Error;