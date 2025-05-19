/* Path: src/components/MealList.jsx
 * Project: Plateful Search
 * Developers: Temima Lewin, Miriam Iny, and Hailey Lazar
 * Purpose:
 *   This component displays a list of meal preview cards.
 *   Each card includes the meal's image, name, a short snippet of instructions,
 *   and a link to DETAILS PAGE to view detailed information about the meal.
 *   The list is generated from an array of meal objects fetched from the API.
 */

import { Link } from 'react-router-dom';
import styles from '../styles/MealList.module.css';

// MealList receives mealResults list from api call
const MealList = ({ mealResults }) => {

  // Function to scroll window to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.mealGrid}>

      {mealResults.map((mealItem) => {
        // Destructure each element from the meal list array
        const { idMeal, strMeal, strMealThumb } = mealItem;

        // Within each meal constructing, return that meal
        return (
          <div className={styles.card} key={idMeal}>

            {/* Meal thumbnail image */}
            <img src={strMealThumb} alt={strMeal} className={styles.imageThumb} />

            {/* Content section with title and link */}
            <div className={styles.content}>

              <h3>{strMeal}</h3>

              {/* Link to the meal detail page, using the meal ID in the URL */}
              <Link
                to={`/details/${idMeal}`}
                className={styles.link}
                onClick={scrollToTop}
              >
                View Details
              </Link>

              </div> {/* Closing meal content */}
          </div> /* Closing meal card */
        ); /* Close meal item return */
      })} {/* Closing meal grid */}
    </div> /* Closing meal grid */
  );
};

export default MealList;