import React, { useState } from 'react';

function InputBox( { setClick }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOnSubmit = () => {
    // Function to handle the submit action
    console.log(inputValue);
    setClick(1);
    // Store the input value as needed
  };

  return (
    <div style={{ position: 'relative', width: '300px', margin: '50px auto' }}>
      <textarea
        value={inputValue}
        onChange={handleChange}
        placeholder="Type here..."
        style={{
          width: '100%',
          height: '100px',
          padding: '10px',
          borderRadius: '10px',
          backgroundColor: '#D3D3D3', // Light grey color
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Floating effect
        }}
      />
      <button
        onClick={handleOnSubmit}
        style={{
          display: 'block',
          width: '100%',
          padding: '10px',
          borderRadius: '10px',
          marginTop: '10px',
          backgroundColor: '#007BFF', // Button color
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default InputBox;
