import { useQuery } from "react-query";
import { useState } from "react";

// Function to fetch posts from API
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  const [showPosts, setShowPosts] = useState(true);
  const [refetchCount, setRefetchCount] = useState(0);

  // Use the useQuery hook to fetch data
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery(
    "posts",
    fetchPosts,
    {
      enabled: showPosts,
      // Optional: Configure caching behavior
      staleTime: 2 * 60 * 1000, // Consider data fresh for 2 minutes
    }
  );

  const togglePosts = () => {
    setShowPosts(!showPosts);
  };

  const handleRefetch = () => {
    setRefetchCount((prev) => prev + 1);
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
          {showPosts ? "Hide Posts" : "Show Posts"}
        </button>

        {showPosts && (
          <button
            onClick={handleRefetch}
            disabled={isFetching}
            className="refetch-btn"
          >
            {isFetching ? "Refreshing..." : "Refresh Data"}
          </button>
        )}

        <div className="stats">
          <span>Refetched: {refetchCount} times</span>
          {isFetching && <span className="fetching">Updating...</span>}
        </div>
      </div>

      {showPosts && (
        <div className="posts-list">
          <h2>Posts ({data?.length || 0})</h2>
          <div className="cache-info">
            <p>💡 Try hiding and showing posts to see caching in action!</p>
            <p>
              Data is cached for 2 minutes. After that, it will refetch when
              shown again.
            </p>
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
