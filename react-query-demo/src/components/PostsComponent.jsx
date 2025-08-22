import { useQuery } from 'react-query';
import { useState } from 'react';

// Function to fetch posts from API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const [showPosts, setShowPosts] = useState(true);
  const [refetchCount, setRefetchCount] = useState(0);

  // Use the useQuery hook to fetch data with all required properties
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery(
    'posts',
    fetchPosts,
    {
      enabled: showPosts,
      // Configure caching behavior
      cacheTime: 10 * 60 * 1000, // Keep data in cache for 10 minutes
      staleTime: 2 * 60 * 1000, // Consider data fresh for 2 minutes
      refetchOnWindowFocus: true, // Refetch data when window gains focus
      keepPreviousData: true, // Keep previous data while fetching new data
    }
  );

  const togglePosts = () => {
    setShowPosts(!showPosts);
  };

  const handleRefetch = () => {
    setRefetchCount(prev => prev + 1);
    refetch();
  };

  if (isLoading) {
    return (
      <div className="posts-container">
        <div className="loading">Loading posts...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="posts-container">
        <div className="error">Error: {error.message}</div>
      </div>
    );
  }

  return (
    <div className="posts-container">
      <div className="controls">
        <button onClick={togglePosts} className="toggle-btn">
          {showPosts ? 'Hide Posts' : 'Show Posts'}
        </button>
        
        {showPosts && (
          <button onClick={handleRefetch} disabled={isFetching} className="refetch-btn">
            {isFetching ? 'Refreshing...' : 'Refresh Data'}
          </button>
        )}
        
        <div className="stats">
          <span>Refetched: {refetchCount} times</span>
          {isFetching && <span className="fetching">Updating...</span>}
          <span className="cache-info">Cache: 10 minutes</span>
        </div>
      </div>

      {showPosts && (
        <div className="posts-list">
          <h2>Posts ({data?.length || 0})</h2>
          <div className="feature-info">
            <p>💡 Try these features to see React Query in action:</p>
            <ul>
              <li>Hide and show posts to see caching (data remains for 10 minutes)</li>
              <li>Switch browser tabs and return to see automatic refetching</li>
              <li>Refresh data to see smooth transitions with previous data maintained</li>
            </ul>
          </div>
          <ul>
            {data?.slice(0, 10).map((post) => (
              <li key={post.id} className="post-item">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
          {data && data.length > 10 && (
            <p className="more-posts">... and {data.length - 10} more posts</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PostsComponent;
