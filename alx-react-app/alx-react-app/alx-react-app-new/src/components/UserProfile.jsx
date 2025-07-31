const UserProfile = (props) => {
  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '20px',
      margin: '15px 0',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{
        color: '#2c3e50',
        marginTop: 0,
        borderBottom: '1px solid #eee',
        paddingBottom: '10px'
      }}>{props.name}</h2>
      <p style={{ margin: '8px 0' }}>
        Age: <span style={{
          fontWeight: 'bold',
          color: '#e74c3c'
        }}>{props.age}</span>
      </p>
      <p style={{
        color: '#7f8c8d',
        fontStyle: 'italic'
      }}>Bio: {props.bio}</p>
    </div>
  );
};