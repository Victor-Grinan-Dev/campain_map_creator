import React from 'react'

const HOTWButton = ({caption, action=undefined, role='button', disabled=false}) => {
  return (
    <button className='hotwButton'
      type={role} 
      onClick={action}
      disabled={disabled} 
      style={{
        minWidth:"50px",
        maxWidth:"fit-content"
      }}>
        {caption}
    </button>
  )
}

export default HOTWButton