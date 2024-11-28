import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [input, setInput] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedText(input); // Save the input to display
    setInput(''); // Clear the textarea after submission
  };

  return (
    <div className="form-container">
      <h1 className="header">MEGAVIBE9000</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your idea of the ideal party experience."
          className="text-area"
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      {submittedText && (
        <div className="submitted-text">
          <h2>Your Party Experience:</h2>
          <p>{submittedText}</p>
        </div>
      )}
    </div>
  );
};

export default Form;

