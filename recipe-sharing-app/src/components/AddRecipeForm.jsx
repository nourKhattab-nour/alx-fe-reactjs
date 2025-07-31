import { useState } from 'react'
import useRecipeStore from './recipeStore'

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!title.trim() || !description.trim()) return
    
    addRecipe({ 
      id: Date.now(), 
      title: title.trim(), 
      description: description.trim() 
    })
    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit} className="recipe-form">
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
      <button type="submit">Add Recipe</button>
    </form>
  )
}

export default AddRecipeForm