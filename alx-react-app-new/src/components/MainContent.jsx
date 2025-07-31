function MainContent() {
  return (
    <main style={{ 
      padding: '30px',
      backgroundColor: '#f5f5f5',
      margin: '20px',
      borderRadius: '8px',
      lineHeight: '1.6',
      fontSize: '1.2rem'
    }}>
      <p style={{ 
        color: '#2c3e50',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        I love to visit <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>New York</span>, 
        <span style={{ color: '#3498db', fontWeight: 'bold' }}> Paris</span>, and 
        <span style={{ color: '#2ecc71', fontWeight: 'bold' }}> Tokyo</span>.
      </p>
    </main>
  );
}

export default MainContent;