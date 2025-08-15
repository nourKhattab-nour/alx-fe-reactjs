import { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import { fetchUserData } from './services/githubService';
import './App.css';

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    if (!username) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const { data, error } = await fetchUserData(username);
      if (error) {
        setError(error);
        setUserData(null);
      } else {
        setUserData(data);
      }
    } catch (err) {
      setError('An unexpected error occurred');
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {userData && <UserCard user={userData} />}
    </div>
  );
}

export default App;
