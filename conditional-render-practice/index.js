import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
    this.toggleLoggedState = this.toggleLoggedState.bind(this)
  }

  toggleLoggedState() {
    this.setState(prevState => ({
      ...prevState, isLoggedIn: !prevState.isLoggedIn
    }))
  }

  render() {
    return (
      <div>
        <p>Status: Logged {this.state.isLoggedIn ? 'in' : 'out'}</p>
        <button onClick={this.toggleLoggedState}>Log {!this.state.isLoggedIn ? 'in' : 'out'}</button>
      </div>
    )
  }
}

export default App;