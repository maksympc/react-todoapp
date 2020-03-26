import React from 'react'

function TodoItem(props) {

  return (
    <label className="container">
      {props.text}
      <input type="checkbox"/>
      <span className="checkmark"/>
    </label>
  )
}

export default TodoItem