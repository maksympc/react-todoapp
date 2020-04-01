import React from 'react';

function Joke(props) {
  const {question, punchLine} = props;
  return (
      <div style={{border: '1px solid #eee', borderRadius: '5px', minHeight: '50px', background:'lightyellow', width:'250px', padding:'5px', margin:'5px'}}>
        {question && <div style={{fontStyle: 'italic'}}>{question}</div>}
        {punchLine && <div style={{fontWeight: '600'}}>{punchLine}</div>}
      </div>
  )
}

export default Joke;