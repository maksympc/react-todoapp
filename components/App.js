import React from 'react'

import Header from './Header';
import TodoItem from "./TodoItem";

function App() {

  return (
    <div style={{paddingTop:'46px'}}>
      <Header/>
      <div style={{padding: '20px 20px', border:'3px solid #333'}}>
        <TodoItem text="First item"/>
        <TodoItem text="Second item"/>
        <TodoItem text="Third item"/>
      </div>
    </div>
  )
}

export default App;