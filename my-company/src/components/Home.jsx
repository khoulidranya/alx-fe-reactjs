import React from 'react';

function Home() {
  return (
    <div style={styles.page}>
      <h1>Welcome to My Company</h1>
      <p>Your trusted partner in delivering exceptional services.</p>
    </div>
  );
}

const styles = {
  page: {
    padding: '20px',
    textAlign: 'center',
  },
};

export default Home;
