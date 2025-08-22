import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <NavLink to="/">React Router Demo</NavLink>
      </div>
      
      <ul className="nav-links">
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
        <li><NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>Blog</NavLink></li>
        
        {isAuthenticated ? (
          <>
            <li><NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : ''}>Profile</NavLink></li>
            <li>
              <span className="user-welcome">Hello, {user?.name}</span>
              <button onClick={logout} className="logout-btn">Logout</button>
            </li>
          </>
        ) : (
          <li><NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
