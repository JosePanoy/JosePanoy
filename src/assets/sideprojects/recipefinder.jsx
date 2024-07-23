import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../css/speedtest.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

function RecipeFinder() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!query) return;

    setLoading(true);
    setError('');
    setRecipes([]);

    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`);
      const data = await response.json();

      if (data.results.length === 0) {
        setError('No recipes found.');
      } else {
        const recipeDetails = await Promise.all(data.results.map(async recipe => {
          const detailsResponse = await fetch(`https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${API_KEY}`);
          return detailsResponse.json();
        }));
        setRecipes(recipeDetails);
      }
    } catch (error) {
      setError('Invalid input or The API/server is down at the moment');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleDetails = (id, type) => {
    const updatedRecipes = recipes.map(recipe => {
      if (recipe.id === id) {
        return {
          ...recipe,
          showDetails: type
        };
      }
      return recipe;
    });
    setRecipes(updatedRecipes);
  };

  return (
    <>
      <div className="navbar">
        <Link to="/" className="home-button">Home</Link>
      </div>

      <div className="container">
        <h1>Recipe Finder</h1>
        <div className="search-container1">
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-bar" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
          />
          <button className="searchbtn" onClick={handleSearch} disabled={loading}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            {loading && <span>Loading...</span>}
          </button>
        </div>

        <div className="results">
          {error && <div className="error-message">{error}</div>}
          {recipes.map(recipe => (
            <div key={recipe.id} className="recipe-card">
              <h3>{recipe.title}</h3>
              {recipe.image && (
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  className="recipe-image"
                />
              )}
              <div className="buttons">
                <button 
                  className="toggle-button1"
                  onClick={() => toggleDetails(recipe.id, 'steps')}
                >
                  Show Cooking Steps
                </button>
                <button 
                  className="toggle-button1"
                  onClick={() => toggleDetails(recipe.id, 'ingredients')}
                >
                  Show Ingredients
                </button>
              </div>
              
              {recipe.showDetails === 'steps' && (
                <div className="details">
                  <h4>Cooking Steps:</h4>
                  {recipe.analyzedInstructions.length > 0 ? (
                    <ol>
                      {recipe.analyzedInstructions[0].steps.map(step => (
                        <li key={step.number}>{step.step}</li>
                      ))}
                    </ol>
                  ) : (
                    <p>No cooking instructions available</p>
                  )}
                </div>
              )}
              
              {recipe.showDetails === 'ingredients' && (
                <div className="details">
                  <h4>Ingredients:</h4>
                  <ul>
                    {recipe.extendedIngredients.map(ingredient => (
                      <li key={ingredient.id}>{ingredient.original}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RecipeFinder;
