import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useRecipeStore from '../store/recipeStore'

const EditRecipeForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === Number(id)))
  const updateRecipe = useRecipeStore(state => state.updateRecipe)
  
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title)
      setDescription(recipe.description)
    }
  }, [recipe])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!title.trim() || !description.trim()) return
    
    updateRecipe(Number(id), { 
      title: title.trim(), 
      description: description.trim() 
    })
    navigate(`/recipe/${id}`)
  }

  if (!recipe) return <div>Recipe not found</div>

  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      <h2>Edit Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe description"
        required
      />
      <button type="submit">Update Recipe</button>
      <button type="button" onClick={() => navigate(`/recipe/${id}`)}>
        Cancel
      </button>
    </form>
  )
}

export default EditRecipeForm