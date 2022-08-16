import React from 'react'
import './CardsStyles.css'
import Session from '../assets/sessions.png'
import Course from '../assets/courses.png'
import Upload from '../assets/upload.png'

const Cards = () => {
  return (
    <>
      <div className='card1'>
        <img src={Session} alt='Session' />
        <span className='content'>Efficient Sessions</span>
        <p className='spec'>Create video, audio and chat sessions</p>
      </div>

      <div className='card2'>
        <span className='content'>Courses and Subject</span>
        <p className='spec'>Students able to select a large number of courses and subject</p>
        <img src={Course} alt='Course' />
      </div>

      <div className='card3'>
        <img src={Upload} alt='Upload' />
        <span className='content'>Upload Resources</span> <br></br>
        <p className='spec'>Teachers able to upload notes and other materials for the students</p>
      </div>
    </>
  )
}

export default Cards