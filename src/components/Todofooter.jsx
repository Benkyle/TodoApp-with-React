import React from 'react'

function handleClick() {
  alert('You clicked me!');
}

function Todofooter() {
  return (
    <div>
       <button onClick={handleClick}>
      Click me
    </button>
    </div>
  )
}

export default Todofooter
