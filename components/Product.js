import React from 'react'

function Product(props) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      margin: '10px',
      padding: '10px',
      background: '#f8f8f8',
      border: '1px solid #ddd',
      borderRadius: '5px',
      width: '220px'
    }}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <p style={{textDecoration: 'underline'}}>{props.name}</p>
        <p style={{fontWeight: '600'}}>Price: {props.price}$</p>
      </div>
      <hr/>
      <div style={{color:'#333'}}>{props.description}</div>
      <button
        style={{cursor:'pointer', minMarginTop:'5px', marginTop:'auto', justifySelf:'flex-end', background: 'linear-gradient(#eee, #00ff00)'}}>Buy
        now!
      </button>
    </div>
  )
}

export default Product;