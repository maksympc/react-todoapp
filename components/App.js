import React from 'react'
// import Header from './Header';
// import TodoItem from "./TodoItem";
// import ContactCard from './ContactCard';
import Joke from './Joke.js';
import jokes from './jokeData';
function App() {

  // TodoList
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

  // ContactCards
  // return (
  //   <div className="contacts">
  //     <ContactCard contact={{
  //       name: "Mr. Whiskerson",
  //       imgUrl: "http://placekitten.com/300/200",
  //       phone: "(212) 555-1234",
  //       email: "mr.whiskaz@catnap.meow"
  //     }}/>
  //     <ContactCard contact={{
  //       name: "Fluffykins",
  //       imgUrl: "http://placekitten.com/400/350",
  //       phone: "(212) 555-2345",
  //       email: "fluff@me.com"
  //     }}/>
  //     <ContactCard contact={{
  //       name: "Destroyer",
  //       imgUrl: "http://placekitten.com/400/300",
  //       phone: "(212) 555-4567",
  //       email: "thecat@hotmail.com"
  //     }}/>
  //     <ContactCard contact={{
  //       name: "Felix",
  //       imgUrl: "http://placekitten.com/250/150",
  //       phone: "(212) 555-1234",
  //       email: "ofworlds@yahoo.com"
  //     }}/>
  //   </div>
  // )

  // Jokes
  const jokeComponents = jokes.filter(item => item.question).map((item, index) => <Joke key={index} question={item.question} punchLine={item.punchLine}/>);
  return (<div style={{display: 'flex', flexWrap: 'wrap'}}>
      {jokeComponents}
    </div>);

}

export default App;