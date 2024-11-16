<div style={{ 
  border: '1px solid #ddd', 
  padding: '20px', 
  margin: '10px', 
  borderRadius: '5px',
  backgroundColor: '#fafafa' 
}}>
  <h2 style={{ 
    color: '#333', 
    fontSize: '1.5rem', 
    marginBottom: '10px' 
  }}>
    {props.name}
  </h2>
  <p style={{ 
    fontSize: '1rem', 
    color: '#777' 
  }}>
    Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
  </p>
  <p style={{ 
    fontSize: '1rem', 
    color: '#777' 
  }}>
    Bio: {props.bio}
  </p>
</div>
