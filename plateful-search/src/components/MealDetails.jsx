/* Path: src/components/MealDetails.jsx
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
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure ? measure.trim() : ''} ${ingredient.trim()}`.trim());
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{strMeal}</h1>
      <img src={strMealThumb} alt={strMeal} className={styles.image} />
      
      <div className={styles.info}>
        <p><strong>Category:</strong> {strCategory}</p>
        <p><strong>Origin:</strong> {strArea}</p>
      </div>

      <section className={styles.section}>
        <h2>Ingredients</h2>
        <ul className={styles.ingredientsList}>
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Instructions</h2>
        <p className={styles.instructions}>{strInstructions}</p>
      </section>

      {strYoutube && (
        <section className={styles.section}>
          <h2>Video Tutorial</h2>
          <iframe
            src={`https://www.youtube.com/embed/${strYoutube.split("v=")[1]}`}
            title="YouTube Video Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.videoIframe}
          ></iframe>
        </section>
      )}
    </div>
  );
};

export default MealDetails;
