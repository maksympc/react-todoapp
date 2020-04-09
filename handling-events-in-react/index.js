import React from 'react'

// https://reactjs.org/docs/events.html#supported-events

function App() {

  const handleMouseOver = () => {
    console.log('#mouse over image!');
  };

  return (
    <div>
      <img
        src="https://www.google.com/logos/doodles/2020/thank-you-custodial-and-sanitation-workers-6753651837108756-law.gif"
        onMouseOver={handleMouseOver}/>
    </div>
  )

}

export default App;