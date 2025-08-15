import React, { useState } from "react";
import { fetchUserData } from "./services/github.service";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import "./App.css";

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    if (!username.trim()) return;

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
      setError("An unexpected error occurred");
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      <SearchResults userData={userData} loading={loading} error={error} />
    </div>
  );
}

export default App;
