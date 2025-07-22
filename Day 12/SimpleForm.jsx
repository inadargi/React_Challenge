import React, { useState } from 'react';

function SimpleForm() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') return;
    setSubmitted(true);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>WELCOME TO REACT JS SERIES</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: '10px', width: '200px' }}
          />
          <br />
          <button type="submit" style={{ marginTop: '10px' }}>
            Submit
          </button>
        </form>
      ) : (
        <h3>Hello, {name}! 👋</h3>
      )}
    </div>
  );
}

export default SimpleForm;
