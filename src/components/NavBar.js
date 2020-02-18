import React from 'react'

function NavBar(props){
  const colors = {
    black: "navbar-dark",
    white: "navbar-dark"
  };
  
  return (
    <nav className={`nav ${colors[props.color]} bg-dark`}>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <a className='navbar-brand'>
            { props.title }
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
