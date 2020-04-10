import React from 'react';
import TodoItem from './TodoItem';
import todosData from '../data/todosData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => ({
      todos: prevState.todos.map(item => {
        if (item.id === id) {
          return {...item, completed: !item.completed};
        }
        return item
      })
    }))
  }

  render() {
    const todoItems = this.state.todos.map((item) => <TodoItem key={item.id} item={item}
                                                               handleChange={this.handleChange}/>);
    return (
      <div style={{padding: '30px'}}>
        {todoItems}
      </div>
    )
  }
}

export default App;