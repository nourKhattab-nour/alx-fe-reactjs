import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#2c3e50',
      padding: '15px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
        Company Name
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ 
          color: 'white', 
          textDecoration: 'none',
          padding: '5px 10px',
          borderRadius: '5px',
          transition: 'background-color 0.3s'
        }}>Home</Link>
        <Link to="/about" style={{ 
          color: 'white', 
          textDecoration: 'none',
          padding: '5px 10px',
          borderRadius: '5px',
          transition: 'background-color 0.3s'
        }}>About</Link>
        <Link to="/services" style={{ 
          color: 'white', 
          textDecoration: 'none',
          padding: '5px 10px',
          borderRadius: '5px',
          transition: 'background-color 0.3s'
        }}>Services</Link>
        <Link to="/contact" style={{ 
          color: 'white', 
          textDecoration: 'none',
          padding: '5px 10px',
          borderRadius: '5px',
          transition: 'background-color 0.3s'
        }}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;