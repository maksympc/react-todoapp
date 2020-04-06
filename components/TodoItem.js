import React from 'react'

function TodoItem(props) {

  return (
    <label className="container">
      {props.text}
      <input type="checkbox" checked={props.completed}/>
      <span className="checkmark" />
    </label>
  )
}

export default TodoItem