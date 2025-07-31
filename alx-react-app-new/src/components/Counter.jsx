import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      textAlign: 'center',
      margin: '30px auto',
      padding: '20px',
      maxWidth: '400px',
      border: '2px solid #3498db',
      borderRadius: '10px',
      backgroundColor: '#f8f9fa'
    }}>
      <h2 style={{ color: '#2c3e50' }}>Counter App</h2>
      <p style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: count > 0 ? '#2ecc71' : count < 0 ? '#e74c3c' : '#2c3e50'
      }}>
        Current Count: {count}
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            padding: '8px 16px',
            backgroundColor: '#2ecc71',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Increment (+)
        </button>
        <button 
          onClick={() => setCount(count - 1)}
          style={{
            padding: '8px 16px',
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Decrement (-)
        </button>
        <button 
          onClick={() => setCount(0)}
          style={{
            padding: '8px 16px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;