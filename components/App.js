import React from 'react'
// import Header from './Header';
// import TodoItem from "./TodoItem";
// import ContactCard from './ContactCard';
import Joke from './Joke.js';

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

  const data = [
    {
      question: 'My old aunts would come and tease me at weddings, “Well Sarah? Do you think you’ll be next?”',
      punchLine: 'We’ve settled this quickly once I’ve started doing the same to them at funerals.'
    },
    {
      question: 'Job interviewer: “And where would you see yourself in five years’ time Mr. Jeffries?"',
      punchLine: 'Mr. Jeffries: "Personally I believe my biggest weakness is in listening."'
    },
    {
      question: 'Guest to the waiter: “Can you bring me what the lady at the next table is having?”',
      punchLine: 'Waiter: “Sorry, sir, but I’m pretty sure she wants to eat it herself.”'
    },
    {
      question: 'A mother asks her son: "Anton, do you think I’m a bad mom?"',
      punchLine: 'Son: "My name is Paul."'
    },
    {
      punchLine: 'One of the most wonderful things in life is to wake up and enjoy a cuddle with somebody; unless you are in prison.'
    },
  ];

  return (<div style={{display: 'flex', flexWrap: 'wrap'}}>
      {data.map(item => <Joke question={item.question} punchLine={item.punchLine}/>)}
    </div>);


}

export default App;