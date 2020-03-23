import React from 'react'

import Header from './Header';

function App() {

  return (
    <div>
      <Header/>
      <div style={{display: 'flex'}}>
        <input type="checkbox"/> <p style={{margin: '0 0 0 10px', padding: '0'}}>First item</p>
      </div>
      <div style={{display: 'flex'}}>
        <input type="checkbox"/> <p style={{margin: '0 0 0 10px', padding: '0'}}>Second item</p>
      </div>
      <div style={{display: 'flex'}}>
        <input type="checkbox"/> <p style={{margin: '0 0 0 10px', padding: '0'}}>Third item</p>
      </div>
    </div>
  )
}

export default App;