import React from 'react';

const HeadingRow = () => {
  const headings = [
    {
      title: '5 M',
      description: 'Daily User Enagagements',
    },
    {
      title: '$500 K',
      description: 'Revenue Surge For an Platform',
    },
    {
      title: '10X',
      description: 'ROAS on all our marketing campaigns',
    },
  ];

  return (
    <div style={styles.headingRow}>
      {headings.map((heading, index) => (
        <div key={index} style={styles.headingContainer}>
          <h2 style={styles.heading}>{heading.title}</h2>
          <p style={styles.description}>{heading.description}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  headingRow: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px',
    backgroundColor: 'black',
    
  },
  headingContainer: {
    textAlign: 'center',
    width: '30%',
    padding: '20px',
    border: '1px solid black',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'black',
  },
  heading: {
    color: '#333',
    marginBottom: '10px',
  },
  description: {
    color: '#666',
    lineHeight: '1.4',
    font:'Poppins',
  },
};

export default HeadingRow;
