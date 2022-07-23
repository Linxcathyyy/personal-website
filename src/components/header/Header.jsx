import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import AutoTyping, { BlinkCursor } from 'react-auto-typing'

const Header = () => {
  return (
    <div className='header'>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Xingchen</h1>
        <AutoTyping
          active // <boolean>
          textRef='Fullstack Developer' // <string>
          writeSpeed={150} // <number>
          deleteSpeed={150} // <number>
          delayToWrite={1000} // <number>
          delayToDelete={2000} // <number>
        />
        <BlinkCursor
          active // <boolean>
          blinkSpeed={500} // <number>
        />
        <HeaderSocials />
        <CTA />
      </div>
    </div>
  )
}

export default Header