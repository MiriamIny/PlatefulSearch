/* Path: src\pages\Details.jsx
 * Project: Plateful Search
 * Developers: Temima Lewin, Miriam Iny, and Hailey Lazar
 * Purpose:
 *      This page dynamically renders the details of a selected meal using the meal ID from the URL.
 *      It fetches the meal data from TheMealDB API based on the ID (via useParams),
 *      and passes the meal information to the MealDetails component for display.
 */

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MealDetails from '../components/MealDetails';
import Loading from '../components/Loading';
import Error from '../components/Error';
import styles from '../styles/Details.module.css';


const Details= () => {

  const { idMeal } = useParams();
  // State to hold meal details
  const [meal, setMeal] = useState(null);
  // State to indicate loading status
  const [loading, setLoading] = useState(false);
  // State to hold any error messages
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchMeal = async () => 
    {
        setLoading(true);
        try 
        {
            const result = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
            const data = await result.json();
            // If meals found, update state, otherwise show "No results"
            if (data.meals) { setMeal(data.meals[0]); } 
            else { setError('The recipe you are looking for does not exist.'); }
            console.log(meal);

        }
        catch (error) 
        {
            setError('Failed to load meal details. Please try again later.');
        }
        setLoading(false);
    };

    fetchMeal();}
    , [idMeal]);

    return (  
        <>
            {/* Conditional rendering for loading and error messages */}
            {loading && <Loading/>}
            {error && <Error errorMsg={error}/>}

            {meal && < MealDetails meal={meal}/>}
        </>
    );
};
export default Details;