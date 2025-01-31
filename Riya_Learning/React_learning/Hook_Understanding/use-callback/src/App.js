import './App.css';
import React, { useCallback, useEffect } from 'react';
import { useState, useMemo } from 'react';

function App() {
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState("");

  let result = useMemo(() => {
    return factorial(counter);
  }, [counter]);

  const displayName = useCallback((greeting) => {
    return greeting + ' ' +name;
  }, [name]);

  return (
    <div className="App">
      <h1>
        factorial of {counter} is : <span>{result}</span>
      </h1>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <hr></hr>
      <div>
        <div>
          <label>Enter Name</label>
        </div>
        <input
          type="text"
          name="name"
          placeholder='Enter your name'
          onChange={(e) => setName(e.target.value)} >
        </input>
        <hr />
        <DisplayName displayName={displayName} />
      </div>
    </div>
  );
}

const DisplayName = (({ displayName }) => {

  const [value, setValue] = useState();

  useEffect(() => {
    setValue(displayName());
    console.log("DisplayName Hits ")
  }, [displayName])

  return <p>{`My name is ${value}`}</p>
})

function factorial(n) {
  // let i = 0;
  // while (i < 200000000)
  //   i++;

  if (n < 0) // Error condition
    return "Error! Can't Calculate";
  if (n === 0) // Enf of function
    return 1;

  return n * factorial(n - 1);
}

export default App;
