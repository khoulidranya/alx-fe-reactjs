import React from 'react';

function Services() {
  return (
    <div style={styles.page}>
      <h1>Our Services</h1>
      <ul>
        <li>Service 1: Quality Assurance</li>
        <li>Service 2: Innovative Solutions</li>
        <li>Service 3: Customer Support</li>
      </ul>
    </div>
  );
}

const styles = {
  page: {
    padding: '20px',
    textAlign: 'center',
  },
};

export default Services;
