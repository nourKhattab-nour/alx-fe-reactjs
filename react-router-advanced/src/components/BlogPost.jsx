import { useParams, Link } from "react-router-dom";

const BlogPost = () => {
  const { postId } = useParams();

  // Mock blog posts data
  const blogPosts = {
    1: {
      title: "Getting Started with React Router",
      content:
        "React Router is a powerful routing library for React applications. It allows you to build single-page applications with navigation without the page refreshing as the user navigates...",
      author: "John Doe",
      date: "January 15, 2024",
    },
    2: {
      title: "Advanced Routing Techniques",
      content:
        "Once you master the basics of React Router, you can explore advanced techniques like nested routes, protected routes, and dynamic routing...",
      author: "Jane Smith",
      date: "February 3, 2024",
    },
    3: {
      title: "Authentication in React Apps",
      content:
        "Implementing authentication in React applications requires careful consideration of routing, state management, and security...",
      author: "Mike Johnson",
      date: "March 10, 2024",
    },
  };

  const post = blogPosts[postId];

  if (!post) {
    return (
      <div className="blog-post-container">
        <h2>Post not found</h2>
        <Link to="/blog">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="blog-post-container">
      <Link to="/blog" className="back-link">
        ← Back to Blog
      </Link>
      <article className="full-blog-post">
        <h1>{post.title}</h1>
        <div className="post-meta">
          <span>By {post.author}</span> • <span>{post.date}</span>
        </div>
        <p>{post.content}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, eget
          aliquam nisl nunc eget nisl.
        </p>
        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Nullam euismod, nisl eget ultricies ultricies,
          nunc nisl aliquam nunc, eget aliquam nisl nunc eget nisl.
        </p>
      </article>
    </div>
  );
};

export default BlogPost;
