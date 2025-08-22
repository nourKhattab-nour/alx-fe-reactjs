import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/profile";

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple authentication simulation
    if (username && password) {
      onLogin({
        name: username,
        email: `${username}@example.com`,
      });

      // Redirect to the page they tried to visit or profile
      navigate(from, { replace: true });
    } else {
      alert("Please enter both username and password");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <p>You must log in to view the profile page</p>

      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>

      <div className="demo-notes">
        <p>For demo purposes, any username/password will work.</p>
        <p>After login, you'll be redirected to your intended destination.</p>
      </div>
    </div>
  );
};

export default Login;
