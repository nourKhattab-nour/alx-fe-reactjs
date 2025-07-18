function About() {
  return (
    <div style={{ padding: '20px', minHeight: '80vh' }}>
      <h1 style={{ color: '#2c3e50', fontSize: '2.5rem' }}>About Us</h1>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
        Founded in 1990, our company has grown from a small startup to a market leader in 
        technology solutions. With over 30 years of experience, we've helped thousands of 
        clients achieve their business goals through innovative strategies and cutting-edge 
        technology.
      </p>
      <div style={{ marginTop: '30px' }}>
        <h2 style={{ color: '#3498db' }}>Our Mission</h2>
        <p>To empower businesses through technology and innovation.</p>
        <h2 style={{ color: '#3498db' }}>Our Vision</h2>
        <p>To be the global leader in transformative business solutions.</p>
      </div>
    </div>
  );
}

export default About;