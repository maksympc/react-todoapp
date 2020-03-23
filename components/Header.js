import React from 'react'

function Header() {

  return (
    <header className='navbar'>
      <ul style={{margin:0, padding:0, display:'flex', listStyle:'none', '*':'pad', flexDimension:'1'}}>
        <li style={{marginRight:'20px'}}><a href='#'>link 1</a></li>
        <li style={{marginRight:'20px'}}><a href='#'>link 2</a></li>
        <li><a href='#'>link 3</a></li>
      </ul>
    </header>
  )

}

export default Header;