import React, { useState } from 'react';

// Counter component
function Counter() {
  const [count, setCount] = useState(0); // Logic for counter state

  // Increment function
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>You have clicked the button {count} times.</h2>
      <button onClick={incrementCount}>Click Me!</button>
    </div>
  );
}

export default Counter;
