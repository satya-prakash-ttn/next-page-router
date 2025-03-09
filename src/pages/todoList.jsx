import React, { useState, useRef } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState('');
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  // Create a reference to hold the interval ID
  const intervalRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo([...todo, input]);
    setInput('');
  }
//console.log(!isRunning);
  const startCounter = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1); 
      }, 1000);
      setIsRunning(true);
    }
  };

  const stopCounter = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
   
  };

  const resetCounter = () => {
    clearInterval(intervalRef.current);
    setCounter(0);
    setIsRunning(false);
  };

  return (
    <div className="container">
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input
          style={{ border: "1px solid #ddd" }}
          type="text"
          name="name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Add Todo</button>
      </form>
      {todo.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      <div className="counter">
        <button onClick={startCounter}>Start</button>
        <button onClick={stopCounter}>Stop</button>
        <button onClick={resetCounter}>Reset</button>

        <p>{counter}</p>
      </div>
    </div>
  );
};

export default TodoList;
