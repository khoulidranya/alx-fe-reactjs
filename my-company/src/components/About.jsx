import React from 'react';

function About() {
  return (
    <div style={styles.page}>
      <h1>About Us</h1>
      <p>We are a company dedicated to providing top-notch solutions tailored to your needs.</p>
    </div>
  );
}

const styles = {
  page: {
    padding: '20px',
    textAlign: 'center',
  },
};

export default About;
