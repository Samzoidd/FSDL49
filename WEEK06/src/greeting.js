import React, { useState } from 'react';

// Greeting component
function Greeting() {
  const [name, setName] = useState('Guest'); // Logic for greeting message

  // Function to update the name (this can be passed as a prop in a larger app)
  const changeName = () => {
    setName('John Doe');
  };

  return (
    <div>
      <h1>Hello, {name}! Welcome to my React App!</h1>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default Greeting;
