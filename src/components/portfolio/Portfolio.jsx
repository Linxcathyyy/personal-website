import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/EduSearch_Poster.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/Sellah.png'
import IMG4 from '../../assets/MeowTheChatBot.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'EduSearch',
    description: 'A cross-platform mobile application using Flutter, Dart and Firebase which automates the process of matching tutors and students. It has already been deployed on both Google Play Store and App store.',
    github: 'https://drive.google.com/file/d/1r6K0jlQyiQ6jaed_o_NYJWlbjtSYYTTj/view?usp=sharing',
  },
  {
    id: 2,
    image: IMG4,
    title: 'Meow the Chatbot',
    description: 'A desktop todo list app developed using Java.',
    github: 'https://github.com/Linxcathyyy/ip/blob/master/docs/README.md',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Sellah',
    description: 'A desktop order management application using Java for online sellers, following MVC design pattern and agile development process.',
    github: 'https://github.com/AY2122S1-CS2103T-T12-1/tp',
  },
  {
    id: 4,
    image: IMG2,
    title: 'RateNUS',
    description: 'An open-source website to provide rating and reviews for NUS facilities using VueJS, Java, Spring Boot and pgSQL.',
    github: 'https://github.com/Linxcathyyy/rateNUS',
  },
]

const Portfolio = () => {
  return (
    <section id='project'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, description, github}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn btn-primary' target='_blank'>View More</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio