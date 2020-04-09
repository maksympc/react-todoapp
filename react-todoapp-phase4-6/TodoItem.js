import React from 'react'

function TodoItem(props) {

  return (
    <label className="container">
      {props.item.text}
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <span className="checkmark"/>
    </label>
  )
}

export default TodoItem