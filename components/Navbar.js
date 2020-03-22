import React from 'react'

function Navbar() {

  return (
    <nav style={{padding:'14px 0', background:'#ddd'}}>
      <ul style={{margin:0, padding:0, display:'flex', listStyle:'none', '*':'pad', flexDimension:'1'}}>
        <li style={{marginRight:'20px'}}><a href='#'>link 1</a></li>
        <li style={{marginRight:'20px'}}><a href='#'>link 2</a></li>
        <li><a href='#'>link 3</a></li>
      </ul>
    </nav>
  )

}

export default Navbar;