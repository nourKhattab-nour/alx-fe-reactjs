import { useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useState({
    username: '',
    location: '',
    reposMin: '',
    language: '',
    page: 1,
    perPage: 10
  });
  const [totalResults, setTotalResults] = useState(0);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      let query = '';
      if (searchParams.username) query += `${searchParams.username} in:login`;
      if (searchParams.location) query += ` location:${searchParams.location}`;
      if (searchParams.reposMin) query += ` repos:>${searchParams.reposMin}`;
      if (searchParams.language) query += ` language:${searchParams.language}`;

      const response = await axios.get(
        `https://api.github.com/search/users?q=${query}&page=${searchParams.page}&per_page=${searchParams.perPage}`,
        {
          headers: {
            Accept: 'application/vnd.github.v3+json'
          }
        }
      );

      setUsers(response.data.items);
      setTotalResults(response.data.total_count);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to search users');
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    setSearchParams(prev => ({
      ...prev,
      page: prev.page + 1
    }));
    handleSearch({ preventDefault: () => {} });
  };

  const handleParamChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value,
      page: 1 // Reset to first page when params change
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">GitHub User Search</h1>
          <p className="mt-2 text-gray-600">
            Find developers by username, location, repositories and more
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={searchParams.username}
                  onChange={handleParamChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  placeholder="e.g. octocat"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={searchParams.location}
                  onChange={handleParamChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  placeholder="e.g. San Francisco"
                />
              </div>

              <div>
                <label htmlFor="reposMin" className="block text-sm font-medium text-gray-700">
                  Minimum Repositories
                </label>
                <input
                  type="number"
                  id="reposMin"
                  name="reposMin"
                  value={searchParams.reposMin}
                  onChange={handleParamChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  placeholder="e.g. 10"
                  min="0"
                />
              </div>

              <div>
                <label htmlFor="language" className="block text-sm font-medium text-gray-700">
                  Primary Language
                </label>
                <input
                  type="text"
                  id="language"
                  name="language"
                  value={searchParams.language}
                  onChange={handleParamChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  placeholder="e.g. JavaScript"
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
              >
                {loading ? 'Searching...' : 'Search Users'}
              </button>
            </div>
          </form>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {users.length > 0 && (
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-600">
                Showing {users.length} of {totalResults} results
              </p>
              {users.length < totalResults && (
                <button
                  onClick={handleLoadMore}
                  disabled={loading}
                  className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Load More
                </button>
              )}
            </div>
          )}

          {users.map(user => (
            <div key={user.id} className="bg-white shadow overflow-hidden rounded-lg">
              <div className="px-4 py-5 sm:px-6 flex items-center space-x-4">
                <img
                  className="h-16 w-16 rounded-full"
                  src={user.avatar_url}
                  alt={`${user.login}'s avatar`}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {user.login}
                    </h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {user.type}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Score: {user.score.toFixed(2)}
                  </p>
                </div>
                <div className="mt-4 sm:mt-0">
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          ))}

          {loading && users.length === 0 && (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
              <p className="mt-2 text-gray-600">Searching GitHub users...</p>
            </div>
          )}

          {!loading && users.length === 0 && !error && (
            <div className="text-center py-8 bg-white rounded-lg shadow">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No users found</h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search criteria
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
