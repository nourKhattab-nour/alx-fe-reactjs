function UserProfile(props) {
  return (
    <div style={{ 
      border: '2px solid #e0e0e0',
      borderRadius: '10px',
      padding: '20px',
      margin: '20px auto',
      maxWidth: '400px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ 
        color: '#2c3e50',
        borderBottom: '2px solid #3498db',
        paddingBottom: '10px',
        marginTop: 0
      }}>{props.name}</h2>
      <p style={{ fontSize: '1.1rem' }}>
        <span style={{ fontWeight: 'bold', color: '#e74c3c' }}>Age:</span> {props.age}
      </p>
      <p style={{ 
        fontSize: '1rem',
        lineHeight: '1.5',
        color: '#34495e'
      }}>
        <span style={{ fontWeight: 'bold', color: '#e74c3c' }}>Bio:</span> {props.bio}
      </p>
    </div>
  );
}

export default UserProfile;