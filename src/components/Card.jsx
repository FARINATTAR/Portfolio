function Card({ title, description, skills }) {
    const cardStyle = {
      backgroundColor: '#1e293b', // Purple color
      color: 'white', // White text for visibility
      padding: '1rem',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    };
  
    return (
      <div style={cardStyle}>
        <h5 style={{ color: '#f6ad55' }}>{title}</h5> {/* Lighter orange for contrast */}
        <p>{description}</p>
        <span>{skills}</span>
      </div>
    );
  }
  
  export default Card;
  