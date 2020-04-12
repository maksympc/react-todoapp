import React, {useState, useEffect} from 'react'
import randomcolor from 'randomcolor'

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('black');

  useEffect(() => {
    setColor(randomcolor())
  }, [count])

  useEffect(() => {
    const intervalId = setInterval(() => setCount(prev => prev + 1), 1000);
    return () => clearInterval(intervalId);
  }, [])

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  const double = () => setCount(prevCount => prevCount * 2);
  const half = () => setCount(prevCount => (Number((prevCount / 2).toFixed(2))));

  return (
    <div>
      <h1 style={{color: color}}>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={double}>Double</button>
      <button onClick={half}>Half</button>
    </div>
  )
}

export default App;