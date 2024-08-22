import { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((c) => c - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default MyComponent;
