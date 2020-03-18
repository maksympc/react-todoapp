import React from "react"
import ReactDOM from "react-dom"

function MyInfo() {
  return (
    <div style={{background:'#3399ff', padding:'20px', color:'white'}}>
      <h1>Maksym Pinchuk</h1>
      <p>I'm a software engineer, I like playing the guitar and doing sport exersices</p>
      <ol style={{background:'#4da6ff', padding:'20px', color:'#e6f3ff'}}>
        <li>Thailand</li>
        <li>Amsterdam</li>
        <li>Faroe Island</li>
      </ol>
    </div>
  );
}

// JSX
ReactDOM.render(<MyInfo />, document.getElementById("root"));