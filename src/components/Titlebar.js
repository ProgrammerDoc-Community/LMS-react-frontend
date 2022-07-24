import React from 'react'
import {Link} from 'react-router-dom';

import './TitlebarStyles.css';

const Titlebar = () => {
  return (
    <div className='hero'>
        <div className='text'>
            <h1>THE PERFECT MOMENT TO <br></br> LEARN SOMETHING NEW</h1>
            <p>Getting the time to learn from teachers <br></br> remotely for a better and perfect 
            community in <br></br> the next generation to come </p>
            <div>
                <Link to="/" className='btn'>GET STARTED</Link>
            </div>
        </div>
    </div>
  )
}

export default Titlebar