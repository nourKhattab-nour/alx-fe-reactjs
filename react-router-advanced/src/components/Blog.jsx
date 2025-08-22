import { Link } from 'react-router-dom';

const Blog = () => {
  // Mock blog posts data
  const blogPosts = [
    { id: 1, title: 'Getting Started with React Router', excerpt: 'Learn how to implement routing in your React applications...' },
    { id: 2, title: 'Advanced Routing Techniques', excerpt: 'Explore nested routes, protected routes, and more...' },
    { id: 3, title: 'Authentication in React Apps', excerpt: 'Implement secure authentication flows in your React applications...' },
  ];

  return (
    <div className="blog-container">
      <h1>Blog Posts</h1>
      <div className="blog-posts">
        {blogPosts.map(post => (
          <article key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <Link to={`/blog/${post.id}`} className="read-more"> {/* This should work with :id */}
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
