import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // State management
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');

  // API call function
  const fetchUserData = async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return response.data;
    } catch (error) {
      throw error.response?.status === 404 
        ? 'User not found' 
        : 'Failed to fetch data';
    }
  };

  // Search handler
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError(typeof err === 'string' ? err : 'API request failed');
    } finally {
      setLoading(false);
    }
  };

  // User Card Component (moved inside App)
  const UserCard = ({ user }) => (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.login} />
      <h2>{user.name || user.login}</h2>
      {user.bio && <p>{user.bio}</p>}
      <div className="stats">
        <span>Followers: {user.followers}</span>
        <span>Following: {user.following}</span>
        <span>Repos: {user.public_repos}</span>
      </div>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  );

  // Search Bar Component (moved inside App)
  const SearchBar = () => (
    <form onSubmit={handleSearch} className="search-form">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );

  return (
    <div className="app">
      <h1>GitHub User Search</h1>
      <SearchBar />
      
      {loading && <div className="status">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {userData && <UserCard user={userData} />}
    </div>
  );
}

export default App;
