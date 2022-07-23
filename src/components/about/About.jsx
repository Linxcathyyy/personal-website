import React from 'react'
import './about.css'
import Tabs from './Tabs'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <Tabs />
      </div>
    </section>
  )
}

export default About