import React, {Component} from "react"
import FormComponent from './FormComponent'

class Form extends Component {
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
      `      First name: ${this.state.firstName}
       Last name: ${this.state.lastName}
       Age: ${this.state.age} 
       Gender: ${this.state.gender} 
       Location: ${this.state.location} 
       Dietary restrictions: ${this.state.restrictions}`);
  }

  render() {
    return (
      <FormComponent
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        data={this.state}
      />
    )
  }
}

export default Form
