import { useParams, Link } from 'react-router-dom'
import useRecipeStore from './recipeStore'

const RecipeDetails = () => {
  const { id } = useParams()
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === Number(id))
  );

  if (!recipe) return <div>Recipe not found</div>

  return (
    <div className="recipe-details">
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <div className="recipe-actions">
        <Link to={`/edit/${recipe.id}`} className="edit-link">Edit</Link>
        <Link to="/" className="back-link">Back to Recipes</Link>
      </div>
    </div>
  )
}

export default RecipeDetails