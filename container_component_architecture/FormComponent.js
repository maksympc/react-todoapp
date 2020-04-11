import React from 'react'

function FormComponent(props) {
  const restrictions = props.data.restrictions && props.data.restrictions.join(', ');
  return (
    <main>
      <form onSubmit={props.handleSubmit}>
        <input
          name="firstName"
          value={props.data.firstName}
          placeholder="First Name"
          onChange={props.handleChange("firstName")}
        /><br/>
        <input
          name="lastName"
          placeholder="Last Name"
          onChange={props.handleChange("lastName")}
        /><br/>
        <input
          type="number"
          name="age"
          min={0}
          onChange={props.handleChange("age")}
          placeholder="Age"/><br/>

        {/* Create radio buttons for gender here */}
        <label>
          Select gender:
          <label>
            <input name="gender" value="female" type="radio" checked={props.data.gender === 'female'}
                   onChange={props.handleChange('gender')}/>
            female
          </label>
          <label>
            <input name="gender" value="male" type="radio" checked={props.data.gender === 'male'}
                   onChange={props.handleChange('gender')}/>
            male
          </label>
        </label>
        <br/>

        {/* Create select box for location here */}
        <select name="location" value={props.data.location} onChange={props.handleChange('location')}>
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
                   checked={props.data.restrictions && props.data.restrictions.includes('vegetarian')}
                   value="vegetarian"
                   onChange={props.handleChange('restrictions')}/>
            Vegetarian
          </label>
          <label>
            <input name="restrictions" type="checkbox"
                   checked={props.data.restrictions && props.data.restrictions.includes('kosher')}
                   value="kosher"
                   onChange={props.handleChange('restrictions')}/>
            Kosher
          </label>
          <label>
            <input name="restrictions" type="checkbox"
                   checked={props.data.restrictions && props.data.restrictions.includes('lactose free')}
                   value="lactose free"
                   onChange={props.handleChange('restrictions')}/>
            Lactose free
          </label>

        </label>
        <br/>

        <button>Submit</button>
      </form>
      <hr/>
      <h2>Entered information:</h2>
      <p>Your name: {`${props.data.firstName} ${props.data.lastName}`}</p>
      <p>Your age: {props.data.age}</p>
      <p>Your gender: {props.data.gender}</p>
      <p>Your destination: {props.data.location}</p>
      <p>
        Your dietary restrictions: {restrictions}
        {/* Dietary restrictions here, comma separated */}
      </p>
    </main>
  )
}

export default FormComponent