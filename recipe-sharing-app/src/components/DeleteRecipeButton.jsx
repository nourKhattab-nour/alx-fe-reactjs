import { useNavigate } from 'react-router-dom'
import useRecipeStore from '../store/recipeStore'

const DeleteRecipeButton = ({ id }) => {
  const navigate = useNavigate()
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe)

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(id)
      navigate('/')
    }
  }

  return (
    <button onClick={handleDelete} className="delete-button">
      Delete Recipe
    </button>
  )
}

export default DeleteRecipeButton