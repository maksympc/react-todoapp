import React, {useState} from 'react'

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  const double = () => setCount(prevCount => prevCount * 2);
  const half = () => setCount(prevCount => (Number((prevCount / 2).toFixed(2))));

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={double}>Double</button>
      <button onClick={half}>Half</button>
    </div>
  )
}

export default App;