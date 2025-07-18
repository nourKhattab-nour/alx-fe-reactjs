function Services() {
  const services = [
    "Technology Consulting",
    "Market Analysis",
    "Product Development",
    "Cloud Solutions",
    "Data Analytics",
    "Digital Marketing"
  ];

  return (
    <div style={{ padding: '20px', minHeight: '80vh' }}>
      <h1 style={{ color: '#2c3e50', fontSize: '2.5rem' }}>Our Services</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {services.map((service, index) => (
          <li key={index} style={{
            padding: '15px',
            margin: '10px 0',
            backgroundColor: '#f8f9fa',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;