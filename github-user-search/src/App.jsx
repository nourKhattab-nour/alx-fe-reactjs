import { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import { fetchUserData } from './services/githubService';
import './App.css';

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (username) => {
    // Skip search if empty or same as previous search
    if (!username.trim() || username === searchTerm) return;
    
    setSearchTerm(username);
    setLoading(true);
    setError(null);
    setUserData(null); // Clear previous results
    
    try {
      const { data, error } = await fetchUserData(username);
      
      if (error) {
        setError(error);
      } else {
        setUserData(data);
      }
    } catch (err) {
      setError('Failed to connect to GitHub API');
      console.error('API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>GitHub User Search</h1>
        <p>Find any GitHub user profile</p>
      </header>
      
      <main className="app-content">
        <SearchBar onSearch={handleSearch} />
        
        {loading && (
          <div className="status-message loading">
            <div className="spinner"></div>
            <p>Searching for {searchTerm}...</p>
          </div>
        )}
        
        {error && (
          <div className="status-message error">
            <p>⚠️ {error}</p>
            {error.includes('not found') && (
              <p>Please check the username and try again</p>
            )}
          </div>
        )}
        
        {userData && <UserCard user={userData} />}
      </main>
      
      <footer className="app-footer">
        <p>Uses GitHub's public API</p>
      </footer>
    </div>
  );
}

export default App;
