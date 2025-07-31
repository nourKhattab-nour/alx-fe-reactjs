// src/App.jsx
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import EditRecipeForm from './components/EditRecipeForm'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Recipe Sharing App</h1>
        <nav>
          <Link to="/" className="nav-link">All Recipes</Link>
          <Link to="/add-recipe" className="nav-link">Add Recipe</Link>
        </nav>
      </header>
      
      <main className="app-main">
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
        </Routes>
      </main>
      
      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Recipe Sharing App</p>
      </footer>
    </div>
  )
}

export default App
