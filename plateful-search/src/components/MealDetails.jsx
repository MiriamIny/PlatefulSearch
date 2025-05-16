/* Path: src\components\MealDetails.jsx
 * Project: Plateful Search
 * Developers: Temima Lewin, Miriam Iny, and Hailey Lazar
 * Purpose:
 *      This component renders detailed information about a selected meal (id).
 *      It receives a `meal` object via props and displays its name, image, 
 *      category, origin, ingredients, instructions, and a YouTube tutorial if available.
 */

import styles from '../styles/MealDetails.module.css';

// MealDetails component receives meal prop passed in - one element array api result
const MealDetails = ({ meal }) => {
  // Destructure relevant fields from the meal object
  const { strMeal, strMealThumb, strCategory, strArea, strInstructions, strYoutube } = meal;

  // Build a list of ingredients with measurements (up to 20 possible fields)
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    // Only include non-empty ingredients
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure} ${ingredient}`.trim());
    }
  }

  // Render the meal details UI
  return (
    <div className={styles.container}>
      <h1>{strMeal}</h1>
      <img src={strMealThumb} alt={strMeal} className={styles.image} />
      
      {/* Display basic info about the meal */}
      <p><strong>Category:</strong> {strCategory}</p>
      <p><strong>Origin:</strong> {strArea}</p>

      {/* Display list of ingredients */}
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Show cooking instructions */}
      <h2>Instructions</h2>
      <p>{strInstructions}</p>

      {/* Include video tutorial link if available */}
      {strYoutube && (
        <div>
          <h2>Video Tutorial</h2>
          <a href={strYoutube} target="_blank" rel="noopener noreferrer">
            Watch on YouTube
          </a>
        </div>
      )}
    </div>
  );
};

export default MealDetails;
