import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    cookingTime: '',
    difficulty: 'Easy',
    ingredients: '',
    steps: '',
    image: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    // Explicit use of e.target.value
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user types
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) newErrors.title = 'Recipe title is required';
    if (!formData.summary.trim()) newErrors.summary = 'Summary is required';
    if (!formData.cookingTime.trim()) newErrors.cookingTime = 'Cooking time is required';
    if (!formData.ingredients.trim()) newErrors.ingredients = 'Ingredients are required';
    if (!formData.steps.trim()) newErrors.steps = 'Steps are required';
    
    if (formData.ingredients.trim() && formData.ingredients.split('\n').filter(i => i.trim()).length < 2) {
      newErrors.ingredients = 'Please enter at least 2 ingredients';
    }

    if (formData.steps.trim() && formData.steps.split('\n').filter(s => s.trim()).length < 2) {
      newErrors.steps = 'Please enter at least 2 steps';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const newRecipe = {
        ...formData,
        ingredients: formData.ingredients.split('\n').filter(i => i.trim()),
        instructions: formData.steps.split('\n').filter(s => s.trim()),
        id: Date.now()
      };
      
      console.log('Form submitted:', newRecipe);
      alert('Recipe submitted successfully!');
      navigate('/');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
          <h1 className="text-2xl md:text-3xl font-bold">Add New Recipe</h1>
          <p className="mt-1 opacity-90">Share your culinary masterpiece with the community</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="md:col-span-2">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Recipe Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.title ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="e.g. Spaghetti Carbonara"
              />
              {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
            </div>

            {/* Other form fields remain the same */}
            {/* ... */}

          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-3 mt-8">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
            >
              Submit Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
