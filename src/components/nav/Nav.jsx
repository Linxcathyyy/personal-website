import React from 'react'
import './nav.css'
import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

const Nav = () => {
  const [ show, setShow ] = useState(false)
  useEffect(() => {
      if (show) {
        document.body.classList.add('reponsive-nav');
      } else {
        document.body.classList.remove('reponsive-nav');
      }
  }, [show])

  const onToggleClick = () => {
    setShow(!show);
  }

  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <div className='nav-header'>
      <nav className= {show ? 'reponsive-nav' : ''}>
          <li onClick={onToggleClick}><a href='#'>Home</a></li>
          <li onClick={onToggleClick}><a href='#about'>About</a></li>
          <li onClick={onToggleClick}><a href='#skill'>Skills</a></li>
          <li onClick={onToggleClick}><a href='#work'>Work</a></li>
          <li onClick={onToggleClick}><a href='#project'>Projects</a></li>
          <li onClick={onToggleClick}><a href='#contact'>Contact</a></li>
          <button className='nav-btn nav-close-btn' onClick={onToggleClick}>
            <FaTimes/>
          </button>
      </nav>
      <button className='nav-btn nav-btn-fa-bars' onClick={onToggleClick}>
          <FaBars/>
      </button>
    </div>
  )
}

export default Nav