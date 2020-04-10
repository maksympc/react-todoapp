import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 *
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 *
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 *
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      gender: null,
      age: null,
      restrictions: null,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(fieldName) {
    return (event) => {
      const {name, value, type, checked} = event.target;
      if (fieldName === 'restrictions') {
        let newRestrictions = this.state.restrictions || [];
        if (checked) {
          newRestrictions = newRestrictions.includes(value) ? newRestrictions : newRestrictions.concat(value)
        } else {
          newRestrictions = newRestrictions.includes(value) ? newRestrictions.filter(item => item !== value) : newRestrictions
        }
        this.setState(prev => ({
          ...prev, [fieldName]: newRestrictions
        }))
      } else {
        this.setState(prev => ({
          ...prev, [fieldName]: value
        }))
      }
    }
  }

  handleSubmit() {
    alert(
      `First name: ${this.state.firstName}
       Last name: ${this.state.lastName}
       Age: ${this.state.age} 
       Gender: ${this.state.gender} 
       Location: ${this.state.location} 
       Dietary restrictions: ${this.state.restrictions} 
    `);
  }

  render() {
    const restrictions = this.state.restrictions && this.state.restrictions.join(', ');
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <input
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.handleChange("firstName")}
          /><br/>
          <input
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange("lastName")}
          /><br/>
          <input
            type="number"
            name="age"
            min={0}
            onChange={this.handleChange("age")}
            placeholder="Age"/><br/>

          {/* Create radio buttons for gender here */}
          <label>
            Select gender:
            <label>
              <input name="gender" value="female" type="radio" checked={this.state.gender === 'female'}
                     onChange={this.handleChange('gender')}/>
              female
            </label>
            <label>
              <input name="gender" value="male" type="radio" checked={this.state.gender === 'male'}
                     onChange={this.handleChange('gender')}/>
              male
            </label>
          </label>
          <br/>

          {/* Create select box for location here */}
          <select name="location" value={this.state.location} onChange={this.handleChange('location')}>
            <option value="Kiev">Kiev</option>
            <option value="Kharkiv">Kharkiv</option>
            <option value="Lviv">Lviv</option>
          </select>
          <br/>

          {/* Create check boxes for dietary restrictions here */}
          <label>
            Dietary restrictions:
            <label>
              <input name="restrictions" type="checkbox"
                     checked={this.state.restrictions && this.state.restrictions.includes('vegetarian')}
                     value="vegetarian"
                     onChange={this.handleChange('restrictions')}/>
              Vegetarian
            </label>
            <label>
              <input name="restrictions" type="checkbox"
                     checked={this.state.restrictions && this.state.restrictions.includes('kosher')}
                     value="kosher"
                     onChange={this.handleChange('restrictions')}/>
              Kosher
            </label>
            <label>
              <input name="restrictions" type="checkbox"
                     checked={this.state.restrictions && this.state.restrictions.includes('lactose free')}
                     value="lactose free"
                     onChange={this.handleChange('restrictions')}/>
              Lactose free
            </label>

          </label>
          <br/>

          <button>Submit</button>
        </form>
        <hr/>
        <h2>Entered information:</h2>
        <p>Your name: {`${this.state.firstName} ${this.state.lastName}`}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.location}</p>
        <p>
          Your dietary restrictions: {restrictions}
          {/* Dietary restrictions here, comma separated */}
        </p>
      </main>
    )
  }
}

export default App
