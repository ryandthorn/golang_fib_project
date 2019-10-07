import React from "react";

const Form = ({ setCurrentSequence }) => {
  const generateFibonacciSequence = n => {
    if (n === 0) {
      return [0];
    } else if (n === 1) {
      return [0, 1];
    } else {
      let storage = generateFibonacciSequence(n - 1);
      storage.push(storage[storage.length - 1] + storage[storage.length - 2]);
      return storage;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const digits = document.getElementById("digits").value;
    const result = generateFibonacciSequence(digits);
    setCurrentSequence(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        id="digits"
        className="input--number"
        min="0"
        max="99"
        placeholder="0-99"
      />
      <input type="submit" className="input--submit" />
    </form>
  );
};

export default Form;
