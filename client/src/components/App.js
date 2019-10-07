import React, { useState } from "react";
import Form from "./Form";

const App = () => {
  const [currentSequence, setCurrentSequence] = useState(null);
  let results;
  if (currentSequence) {
    results = currentSequence.join(", ");
  }
  return (
    <div className="App">
      <h1>Enter number of Fibonacci digits</h1>
      <Form setCurrentSequence={setCurrentSequence} />
      <p className="results">{results}</p>
    </div>
  );
};

export default App;
