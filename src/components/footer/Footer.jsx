import React from 'react'
import './footer.css'
import {FaLinkedinIn} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'
import Picker from 'emoji-picker-react';

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skill'>Skills</a></li>
        <li><a href='#work'>Work</a></li>
        <li><a href='#project'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/xingchen-lin-760b27197/' target='_blank'><FaLinkedinIn/></a>
        <a href='https://github.com/Linxcathyyy' target='_blank'><FiGithub/></a>
      </div>

      <div className='footer__copyright'>
        <p>Thanks for visiting! <span role="img" aria-label="heart">🥰</span></p>
      </div>
    </footer>
  )
}

export default Footer