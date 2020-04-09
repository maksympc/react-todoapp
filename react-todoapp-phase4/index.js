import React from 'react';
import TodoItem from './TodoItem';
import todosData from '../data/todosData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todosData
    }
  }

  render() {
    const todoItems = this.state.todos.map((item) => <TodoItem key={item.id} item={item}/>)
    return (
      <div>
        {todoItems}
      </div>
    )
  }
}

export default App;