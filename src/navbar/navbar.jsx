import React from 'react'
import "./navbar.css";
function Navbar({usersLength}) {
  return (
    <div className='navbar'>
        <div className='navbar-container container'>
            <h1 className='navbar-logo'>Cuser</h1>
            <h3 className='navbar-counter'>
                {usersLength > 0 ? "you have: " + usersLength : "no users"}
            </h3>
        </div>
    </div>
  )
}

export default Navbar