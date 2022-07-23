import React from 'react'
import './work.css'

const Experience = () => {
  return (
    <section id='work'>
      <h5>My Experience</h5>
      <h2>Work Experience</h2>

      <div className='container work-content'>
          <h2>Mobile Engineer Intern @<a href="https://www.grab.com/sg/" target="__blank">Grab</a></h2>
          <h5>May 2022 - Aug 2022</h5>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
          <br></br>
          <h2>Part-Time Web Developer @<a href="https://vibefam.com/" target="__blank">vibefam</a></h2>
          <h5>Nov 2021 - Jan 2022</h5>
          <hr />
          <p>
            • Worked in an agile scrum team, created responsive and functional user interfaces 
            for promo code management system from scratch using VueJS and Firebase, increasing 
            user satisfaction by 8% <br></br>
            • Created and executed unit tests and manual tests to verify functionality <br></br>
            • Built reusable UI components and front-end libraries for future use <br></br>
            • Cleaned up codebase by abstracting reused code, improved code quality and implemented enhancements
            that improved web functionality
          </p>
      </div>
    </section>
  )
}

export default Experience