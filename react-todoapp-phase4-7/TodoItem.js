import React from 'react'

function TodoItem(props) {

  return (
    <label className="container">
      <p style={props.item.completed ? {textDecoration: 'line-through', color: '#aaa'} : null}>{props.item.text}</p>
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