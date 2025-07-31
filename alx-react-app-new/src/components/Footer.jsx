function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#2c3e50',
      color: 'white',
      textAlign: 'center',
      padding: '15px',
      position: 'fixed',
      bottom: 0,
      width: '100%',
      boxShadow: '0 -2px 5px rgba(0,0,0,0.2)'
    }}>
      <p style={{ 
        margin: 0,
        fontSize: '0.9rem'
      }}>© {new Date().getFullYear()} City Lovers</p>
    </footer>
  );
}

export default Footer;