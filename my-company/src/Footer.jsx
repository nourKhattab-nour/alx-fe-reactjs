function Footer() {
  return (
    <footer style={{
      backgroundColor: '#2c3e50',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
      marginTop: '30px'
    }}>
      <p>© 2023 Company Name. All rights reserved.</p>
      <div style={{ marginTop: '10px' }}>
        <span style={{ margin: '0 10px' }}>Privacy Policy</span>
        <span style={{ margin: '0 10px' }}>Terms of Service</span>
        <span style={{ margin: '0 10px' }}>Sitemap</span>
      </div>
    </footer>
  );
}

export default Footer;