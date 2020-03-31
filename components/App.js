import React from 'react'
// import Header from './Header';
// import TodoItem from "./TodoItem";
import ContactCard from './ContactCard';

function App() {

  // return (
  //   <div style={{paddingTop:'46px'}}>
  //     <Header/>
  //     <div style={{padding: '20px 20px', border:'3px solid #333'}}>
  //       <TodoItem text="First item"/>
  //       <TodoItem text="Second item"/>
  //       <TodoItem text="Third item"/>
  //     </div>
  //   </div>
  // )

  return (
    <div className="contacts">
      <ContactCard name="Mr. Whiskerson" imgUrl="http://placekitten.com/300/200" phone="(212) 555-1234" email="mr.whiskaz@catnap.meow"/>
      <ContactCard name="Fluffykins" imgUrl="http://placekitten.com/400/350" phone="(212) 555-2345" email="fluff@me.com"/>
      <ContactCard name="Destroyer" imgUrl="http://placekitten.com/400/300" phone="(212) 555-4567" email="thecat@hotmail.com"/>
      <ContactCard name="Felix" imgUrl="http://placekitten.com/250/150" phone="(212) 555-1234" email="ofworlds@yahoo.com"/>
    </div>
  )


}

export default App;