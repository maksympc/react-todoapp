import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    return (
      <div>
        <h1>You are currently logged {this.state.isLoggedIn ? 'in' : 'out'}</h1>
        <div style={{margin:'auto', background:'#2e2', color:'white', padding:'8px', borderRadius:'4px', width:'200px', textAlign:'center'}} onClick={() => {
          this.setState(state => Object.assign({}, this.state, {isLoggedIn: !state.isLoggedIn}))
        }}>
          Toggle Auth
        </div>
      </div>
    )
  }
}

export default App;